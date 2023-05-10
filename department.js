import mysql from "mysql2"
import inquirer from "inquirer";


router.get('/roles', async (req, res) => {
    const userData = await role.findAll().catch((err) => {
        res.json(err);
    });
    res.json(userData);
});

router.get('/employee', async (req, res) => {
    const userData = await employee.findAll().catch((err) => {
        res.json(err);
    });
    res.json(userData);
});

router.get('/', async (req, res) => {
    const userData = await User.findAll().catch((err) => {
        res.json(err);
    });
    res.json(userData);
});

module.exports