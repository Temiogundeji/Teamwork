const gifExistsQuery = `SELECT * FROM gif WHERE title =  $1`;
const gifInsertQuery = `INSERT INTO 
gif (title, about_gif, imageurl, created_on, modified_on)
VALUES ($1, $2, $3, $4, $5)
returning *`;
const fetchAllGifQuery = `SELECT * FROM gif`;
export {
    gifExistsQuery,
    gifInsertQuery,
    fetchAllGifQuery
};