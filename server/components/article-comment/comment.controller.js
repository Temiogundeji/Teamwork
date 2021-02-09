import moment from 'moment';
import { query } from "../../db/query";
import { commentInsertQuery, commentCheckQuery } from './comment.query';

export const createArticleComment = async (req, res) => {
    const { employeeId, commentbody } = req.body;
    let { articleId } = req.params;

    if(!employeeId || !commentbody || !articleId){
        return res.status(400).send({
            status: "error",
            error: "Some values are missing!"
        });
    }

    const values = [
        employeeId,
        articleId,
        commentbody,
        moment(new Date())
    ];

    try {
        const articleCheckVal = [articleId];
        const articlesFound = await query(commentCheckQuery, articleCheckVal);

        if(articlesFound.rows.length === 0){
            res.status(400).send({ message: 'Article not found!' });
        }

        const { rows } = await query(commentInsertQuery, values);
        const { created_on, commentbody } = rows[0];
        return res.status(201).send({
                "status" : "success" ,
                "data" : {
                    "message" : "comment successfully created" ,
                    "createdOn" : created_on,
                    "comment" : commentbody
                }
            });
        }
        catch(err) {
            res.status(400).send({
                "status": "error",
                "error": err
            })
        }
}