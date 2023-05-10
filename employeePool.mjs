import mysql from "mysql2"

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "test",
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,

})


export default pool