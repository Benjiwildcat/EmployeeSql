import mysql from "mysql2"
import inquirer from "inquirer";

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

});

const promisePool = pool.promise();

let { firstName } = await inquirer.prompt([{

    type: "input",
    name: "firstName"
}])


const [rows, fields] = await promisePool.query("SELECT * from example where name = ?", firstName);

console.log(rows)