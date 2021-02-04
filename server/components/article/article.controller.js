import moment from 'moment';
import { query } from '../../db/query';
import { convertTitlesToSlug } from '../../helpers/utils';
import { articleCheckQuery, articleInsertQuery, updateOneArticleQuery, findOneArticleQuery, deleteOneArticleQuery } from './article.query';

export const createArticle = async (req, res) => {
    const { title, article_body, category_id } = req.body;
    const { path } = req.file;

    if(!title || !article_body || !category_id){
        return res.status(400).send({
            status: "error",
            error:  "Some values are missing!"
        });
    }

    const slug =  convertTitlesToSlug(title);

    const values = [
        title,
        slug,
        article_body,
        path,
        category_id,
        moment(new Date()),
        moment(new Date())
    ];

    try {

        const articleCheckVal = [title];
        const articlesFound = await query(articleCheckQuery, articleCheckVal);

        if(articlesFound.rows.length !== 0){
            res.status(400).send({ message: 'Article with that title already exists!' });
        }

        const { rows } = await query(articleInsertQuery, values);
        console.log(rows);
        const { id, title, created_on } = rows[0];
        return res.status(201).send({
            status: 'Article successfully posted!',
            "data" : {
                "message" : "Article successfully posted",
                "articleId" : id,
                "createdOn" : created_on,
                "title": title,
            }
        });
    }
    catch(err){
        res.status(400).send({
            "status": "error",
            "error": err
        })
    }
} 

export const updateAnArticle = async (req, res) => { 
    const { articleId } = req.params;

    const { title, article_body } = req.body;
    if(!title || !article_body){
        return res.status(400).send({
            message: 'Incomplete parameters!'
        });
    }

    const slug = convertTitlesToSlug(title);

    try{
        const {rows} = await query(findOneArticleQuery, [articleId]);
        if(!rows[0]){
            return res.status(404).send({
                message: 'Article not found'
            });
        }

        const values = [
            title,
            article_body,
            slug,
            moment(new Date()),
            articleId
        ];

        const result = await query(updateOneArticleQuery, values);
        const article = result.rows[0];
        return res.status(200).send({
                "status": "success" ,
                "data": {
                "message": "Article successfully updated",
                "title": article.title,
                "article": article.article_body
                }
            });
    }
    catch(err){
        console.log(err);
        return res.status(400).send({
            "status": "error",
            "error": err
        });
    }

}

export const deleteAnArticle = async(req, res) => {
    const { articleId } = req.params;
    try {
    const { rows } = await query(deleteOneArticleQuery, [articleId]);
    
    if(!rows[0]) {
        return res.status(404).send({'message': 'Article not found'});
    }

    return res.status(204).send({
            "status" : "success" ,
            "data" : {
                "message" : "Article successfully deleted",
            }
        });
    } 
    catch(err) {
        console.log(err);
        return res.status(400).send({
            "status": "error",
            "error": err
        });
    }
}


