import moment from 'moment';
import { query } from "../../db/query";
import { articleCheckQuery } from '../article/article.query';
import { commentInsertQuery, commentCheckQuery } from './comment.query';

export const createComment = async (req, res) => {
    const { title, employeeId, gifId, commentbody, created_on } = req.body;
    if(!title || !employeeId || !gifId || !commentbody){
        return res.status(400).send({
            status: "error",
            error: "Some values are missing!"
        });
    }

    const values = [
        title,
        employeeId,
        gifId,
        commentbody,
        moment(new Date())
    ];

    try {
        const articleCheckVal = [title];
        const articlesFound = await query(commentCheckQuery, articleCheckVal);

        if(articlesFound.rows.length !== 0){
            res.status(400).send({ message: 'Article with that title already exists!' });
        }

        const { rows } = await query(commentInsertQuery, values);
        const { title, created_on, commentbody } = rows[0];
        return res.status(201).send({
                "status" : "success" ,
                "data" : {
                    "message" : "comment successfully created" ,
                    "createdOn" : created_on,
                    "gifTitle" : title,
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