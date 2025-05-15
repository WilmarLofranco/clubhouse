const pool = require('../database/pool');

//create
const createMessage = async (userId, content) => {
    const result = await pool.query(`INSERT INTO messages (user_id, content)
        VALUES ($1, $2), [userId, content]`);
    return result.rows[0];
};

//read
const showAllMessages = async () => {
    const result = await pool.query(`SELECT users.username, messages.content, messages.created_at
        FROM users JOIN messages ON users.id = messages.user_id ORDER BY created_at DESC`);
    return result.rows;
}

const showUserMessages = async(userId) => {
    const result = await pool.query(`SELECT users.username, messages.content
        FROM users JOIN messages ON users.id = messages.user_id
        WHERE user_id = $1
        ORDER BY created_at DESC;`, [userId]);
    return result.rows;
}

//update
const editMessage = async (msgId, content, userId) => {
    const result = await pool.query(`UPDATE messages SET content = $1 
        WHERE id = $2 AND user_id = $3 RETURNING *;`,
        [content, msgId, userId ]
    );
    return result.rows[0];
};

//delete
const deleteMessage = async (msgId, userId) => {
    const result = await pool.query('DELETE FROM messages WHERE id = $1 AND user_id = $2 RETURNING *',
        [msgId, userId]);
    return result.rows[0];
};

module.exports = {
    createMessage,
    showAllMessages,
    editMessage,
    deleteMessage,
    showUserMessages
}