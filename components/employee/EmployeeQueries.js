export const employeeCheckQuery = `SELECT * FROM employee WHERE email =  $1`;
export const employeeInsertQuery = `INSERT INTO 
employee (first_name, last_name, email, password, image, department_id, address)
VALUES ($1, $2, $3, $4, $5, $6, $7)
returning *`;

