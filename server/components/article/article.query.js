export const articleExistsQuery = `SELECT * FROM article WHERE title = $1`;
export const articleInsertQuery = `INSERT INTO 
article (title, slug, article_body, featured_image, category_id, created_on, modified_on)
VALUES ($1, $2, $3, $4, $5, $6, $7)
returning *`;
export const fetchAllArticleQuery = ``;