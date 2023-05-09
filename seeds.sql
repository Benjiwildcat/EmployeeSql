INSERT INTO department (name)
VALUES ("Human Resources"),
       ("Marketing"),
       ("Social Media"),
       ("Stocks"),
       ("Kitchen");


INSERT INTO roles (title, salary, department_id)
VALUES ("HR Director", 175348.00, 1),
       ("Gender Equality advisor", 105321.69, 1),
       ("Advertising Manager", 108519.13, 2),
       ("Marketing assistant", 82720.69, 2),
       ("Instagram coordinator", 101015.04, 3),
       ("Twitter coordinator", 103221.04, 3),
       ("Head Trader", 153420.20, 4),
       ("Stocks accountant", 151135.17, 4),
       ("Head Chef", 113404.21, 5),
       ("Cook", 72501.33, 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Red", "Green", 1, NULL),
       ("Taylor", "Snow", 2, 1),
       ("Steve", "Jobs", 3, NULL),
       ("Stevie", "Wonder", 4, 2),
       ("Will", "Williamson", 5, NULL),
       ("Autumn", "Leaf", 6, NULL),
       ("Bill", "Cash", 7, NULL),
       ("Anita", "Book", 8, 7),
       ("Gordon", "Ramsay", 9, NULL),
       ("Walter", "White", 10, 9);