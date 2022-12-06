import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    charset: process.env.DB_CHAR,
    connectionLimit: 5,
});

pool.on('error', e => console.log(e))

export default pool;