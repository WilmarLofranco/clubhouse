const {Client} = require('pg');
require('dotenv').config();


const client = new Client({
    connectionString: process.env.NODE_ENV === 'development'
        ? process.env.DATABASE_URL_LOCAL 
        : process.env.DATABASE_URL_PROD,
    ssl: process.env.NODE_ENV === 'development' 
        ? false : {rejectUnauthorized: false}
})

const createUsersTable = `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    admin BOOLEAN DEFAULT false
    );
`;

const createMsgTable = `CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    user_id INTEGER not null,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
`;

async function main() {
    try {
        await client.connect();
        await client.query(createUsersTable);
        await client.query(createMsgTable);
        const userResult = await client.query('SELECT COUNT(username) FROM users');
        const msgResult = await client.query('SELECT COUNT(content) FROM messages');
        const usersCount = parseInt(userResult.rows[0].count);
        const msgsCount = parseInt(msgResult.rows[0].count);
        if (usersCount > 0 || msgsCount > 0) {
            await client.query('DELETE FROM messages;');
            await client.query('DELETE FROM users;');
            console.log('Old data deleted.')
        }
    } catch (error) {
        console.log('Error creating tables:', error)
    } finally {
        await client.end();
    }
}

main();