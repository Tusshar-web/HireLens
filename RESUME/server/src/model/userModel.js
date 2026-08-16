const pool = require('../config/db');

const findUserByEmail = async(email) => {
    const [rows] = await pool.query(
        "SELECT * FROM users WHERE email = ?",
    [email]
    )
    return rows;
}

const createUser = async(name,email,passwordHash) => {
    const [result] = await pool.query(
        "INSERT INTO users (name,email,password_hash) VALUES(?,?,?)",
        [name, email, passwordHash]
    )
    return result;
}

const findUserById = async(id) => {
    const [rows] = await pool.query(
        "SELECT * FROM users WHERE id =?",
        [id]
    )
    return rows;
}

module.exports = {
    findUserByEmail,
    createUser,
    findUserById
}