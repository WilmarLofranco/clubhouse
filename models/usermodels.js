const pool = require('../database/pool');

//read
const createUser = async (username, password, isAdmin) => {
    const result = await pool.query(`INSERT INTO users (username, password_hash, admin) 
    VALUES ($1, $2, $3), [username, password, isAdmin]`);
    return result.rows[0];
};

//update
const updateUserRole = async(userId, isAdmin) => {
    const result = await pool.query(`UPDATE users SET admin = $1 WHERE id = $2 RETURNING *;`, [isAdmin, userId]);
    return result.rows[0];
}

module.exports = {
    createUser,
    updateUserRole
};

