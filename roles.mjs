import mysql from "mysql2"
import inquirer from "inquirer";
import { boot } from "./index.mjs";
import emPool from "./employeePool.mjs";


// Function to see all the roles //
export async function viewAllEmployeeRoles() {
    const [rows] = await emPool.query(
        "SELECT roles.id, roles.title, department.name AS department, roles.salary FROM roles JOIN department on roles.department_id = department.id"
    );
    console.table(rows);
    boot();
}

// Function to add a new role //
export async function addNewRole() {
    try {
        const [getDepartments] = await emPool.query(
            "SELECT * FROM department"
        );

        const departments = getDepartments.map((department) => ({
            name: department.name,
            value: department.id,
        }));

        const { newRole, newRoleDepartment, newRoleSalary } = await inquirer.prompt(
            [
                {
                    type: "input",
                    name: "newRole",
                    message: "What is the name of the new role?",
                },
                {
                    type: "list",
                    name: "newRoleDepartment",
                    message: "What department does the new role belong in?",
                    choices: [...departments],
                },
                {
                    type: "number",
                    name: "newRoleSalary",
                    message: "What is the salary for this role?",
                },
            ]
        );

        const [rows] = await emPool.query(
            "INSERT INTO roles (title, department_id, salary) VALUES (?, ?, ?)",
            [newRole, newRoleDepartment, newRoleSalary]
        );

        console.log("Added a new role to the database");
        // console.table(rows);
        boot();
    } catch (err) {
        console.error(err);
    }
}

export async function updateRole() {
    const [rolesArray, employeeArray] = await Promise.all([
        emPool.query("SELECT id, title FROM roles"),
        emPool.query(
            "SELECT id, CONCAT(first_name, ' ', last_name) AS employee_name FROM employee"
        ),
    ]);
    const roles = rolesArray[0].map((row) => ({
        name: row.title,
        value: row.id,
    }));
    const employees = employeeArray[0].map((row) => ({
        name: row.employee_name,
        value: row.id,
    }));

    const { employee_name, role } = await inquirer.prompt([
        {
            type: "list",
            name: "employee_name",
            message: "Which employee role do you want to change?",
            choices: [...employees],
        },
        {
            type: "list",
            name: "role",
            message: "What role do you want to give this employee?",
            choices: [...roles],
        },
    ]);

    const [rows] = await emPool.query(
        "UPDATE employee SET role_id = ? where id = ?",
        [role, employee_name]
    );
    // console.table(rows);
    boot();
}