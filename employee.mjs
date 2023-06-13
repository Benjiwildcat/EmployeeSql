import mysql from "mysql2"
import inquirer from "inquirer";
import emPool from "./employeePool.mjs";
import { boot } from "./index.mjs";

export async function viewAllEmployees() {
    const [rows] = await emPool.query(
        'SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.name AS department, roles.salary as salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id'
    );
    console.table(rows);
    boot();
}

// Function to add a new employee //
export async function addEmployee() {
    const [rolesArray, managerArray] = await Promise.all([
        emPool.query("SELECT id, title FROM roles"),
        emPool.query(
            "SELECT id, CONCAT(first_name, ' ', last_name) AS manager_name FROM employee"
        ),
    ]);

    const roles = rolesArray[0].map((row) => ({
        name: row.title,
        value: row.id,
    }));
    const managers = managerArray[0].map((row) => ({
        name: row.manager_name,
        value: row.id,
    }));

    const { first_name, last_name, role, manager } = await inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is the first name of the new employee?",
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the last name of the employee?",
        },
        {
            type: "list",
            name: "role",
            message: "What is the role of the employee?",
            choices: [...roles],
        },
        {
            type: "list",
            name: "manager",
            message: "Who is the employee's manager?",
            choices: [{ name: "None", value: null }, ...managers],
        },
    ]);

    const [rows] = await emPool.query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
        [first_name, last_name, role, manager]
    );
    console.log("Added new employee to the database");
    console.table(rows);

    boot();
}


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