-- DROP DATABASE IF EXISTS test;
-- CREATE DATABASE test;
-- USE test;
-- CREATE TABLE example
-- (
-- id int auto_increment primary key,
-- name VARCHAR(50)



-- );
-- insert into example (name)
-- VALUES ('John'),('Jacob'),('Mary');

DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
  id INT PRIMARY KEY,
  name VARCHAR (30)
);

CREATE TABLE roles (
  id INT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL (10,2),
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
);

CREATE TABLE employee (
    id INT PRIMARY KEY
    first_name VARCHAR(30)
    last_name VARCHAR(30)
    role_id INT
    manager_id INT
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    FOREIGN KEY (role_id)
    REFERENCES roles(id)
);