import mysql from "mysql2"
import inquirer from "inquirer";
import pool from "./employeePool.mjs"


const promisePool = pool.promise();

let { firstName } = await inquirer.prompt([{

    type: "input",
    name: "firstName"
}])


const [rows, fields] = await promisePool.query("SELECT * from example where name = ?", firstName);

console.log(rows)