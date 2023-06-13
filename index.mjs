import mysql from "mysql2"
import inquirer from "inquirer";
import pool from "./employeePool.mjs"
import { viewAllDepartments, addDepartment } from "./department.mjs";
import { viewAllEmployees, addEmployee } from "./employee.mjs";
import { viewAllEmployeeRoles, addNewRole, updateRole } from "./roles.mjs"

export async function boot() {
    const questions = await inquirer.prompt({
        message: "What would you like to do?",
        type: "list",
        name: "Options",
        choices: ["View all employees",
            "Add an employee",
            "View all employee roles",
            "Add a new employee role",
            "Update an employee role",
            "View all departments",
            "Add a new department",
            "Quit",
        ]
    })
    switch (questions["Options"]) {
        case "View all departments":
            viewAllDepartments();
            break
        case "View all employees":
            viewAllEmployees();
            break
        case "View all employee roles":
            viewAllEmployeeRoles();
            break
        case "Add a new employee role":
            addNewRole();
            break
        case "Update an employee role":
            updateRole();
            break
        case "Add a new department":
            addDepartment();
            break
        case "Add an employee":
            addEmployee();
            break
        case "Quit":
            quit();
            break
    }
}

function quit() {
    console.log("Thanks for using the company database!")
}

boot();