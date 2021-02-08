export const commentCheckQuery = `SELECT * FROM article WHERE title =  $1`;
export const commentInsertQuery = `INSERT INTO 
 articlecomment (title, employeeId, gifId, commentbody, created_on)
VALUES ($1, $2, $3, $4, $5)
returning *`;