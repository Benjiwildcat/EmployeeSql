import mysql from "mysql2"
import inquirer from "inquirer";
import emPool from "./employeePool.mjs";
import { boot } from "./index.mjs";

export async function viewAllDepartments() {
    const [department] = await emPool.query("SELECT * from department")
    console.table(department)

    boot();
}

export async function addDepartment() {
    const { department } = await inquirer.prompt([
        {
            type: "input",
            name: "department",
            message: "What is the name of the new department?",
        },
    ]);
    const [rows] = await emPool.query(
        "INSERT INTO department (name) VALUES (?)",
        [department]
    );
    console.log("Added a new department to the database");

    boot();
}



// .prompt([
//     //Department
//     {
//         type: 'checkbox',
//         message: 'What department would you like to view?',
//         name: 'stack',
//         choices: ['Human Resources', 'Marketing', 'Social Media', 'Stocks', 'Kitchen'],
//     },

//     {
//         type: 'checkbox',
//         message: 'What department would you like to view?',
//         name: 'stack',
//         choices: ['Human Resources', 'Marketing', 'Social Media', 'Stocks', 'Kitchen'],
//     },