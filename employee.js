import mysql from "mysql2"
import inquirer from "inquirer";
import employeePool from mysql.createPool

// const pool = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "test",
//     waitForConnections: true,
//     connectionLimit: 10,
//     maxIdle: 10,
//     idleTimeout: 60000,
//     queueLimit: 0,

// });

async function viewAllEmployees(); await Pool.query