require('dotenv').config()

const { Client } = require('pg');

async function postUser(username, email, password){
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
    try {
        await client.connect();
        return (await client.query(`INSERT INTO users (username, email, password) VALUES ('${username}','${email}','${password}') RETURNING*`)).rows[0];
    } catch (e) {
        return console.log('Error on client query with the code: ' + e.code);
    }finally{
        await client.end();
    }
};

async function getUsers(){
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
    try {
        await client.connect();
        return (await client.query(`SELECT * FROM users`)).rows;
    } catch (error) {
        return error;
    }finally{
        await client.end();
    }
};

async function deleteUser(id){
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
    try {
        await client.connect();
        return (await client.query(`DELETE FROM users WHERE id = '${id}'`)).rowCount;
    } catch (error) {
        return error;
    }finally{
        await client.end();
    }
};

module.exports = {
    postUser,
    getUsers,
    deleteUser
}