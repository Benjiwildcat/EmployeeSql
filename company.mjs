



async function viewAllEmployees() {
    await pool.query("employee.first_name, employee.last_name, employee.role_id, employee.manager_id")
}


async function viewAllRoles() {
    await pool.query("SELECT roles.id, roles.title, roles.salary, roles.department_id")
}



