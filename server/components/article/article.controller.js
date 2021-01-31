import moment from 'moment';
import { articleExistsQuery, articleInsertQuery, fetchAllArticleQuery } from './article.query';
import { convertTitlesToSlug } from '../../helpers/utils';
import { query } from '../../db/query.js'
const createArticle = async (req, res) => {
    const { title, article, category_id } = req.body;
    const { path } = req.file;
    const slug = convertTitlesToSlug(title);

    if(!title || !article || category_id){
        return res.status(400).send({ 
            message: 'Incomplete parameters',
            status: 'error',
            error: 'Some values are missing!'
        });
    }
    

    const values = [
        title,
        slug,
        article,
        path,
        category_id,
        moment(new Date()),
        moment(new Date())
    ];

    try {
        //check if article with the same title already exists.
        const articleCheckVal = [title];
        const articleFound = await query(articleExistsQuery, articleCheckVal);
    
        if(articleFound.rows.length !== 0){
                res.status(400).send({
                    message: 'Article(s) with the same title already exists.',
            });
        }
        // save article post to database
        const { rows } = await query(articleInsertQuery, values);
        const { id, created_on, title } = rows[0];
        return res.status(201).send({
            "status": "success",
            "data" : {
                "message" : "Article successfully posted",
                "articleId" : id,
                "createdOn" : created_on,
                "title": title,
            }
        });
    }
    catch(err){
        res.status(400).send(err);
        console.log(err)
    }
}

const updateArticle = async (req, res) => {}

const getAllArticlesByCategoryId = async (req, res) => {}

const deleteArticle = async (req, res) => {}

const getAllArticlesByEmployeeId = async (req, res) => {
    
    const values = [];

    try {
        const { rows } = await query(fetchAllGifQuery, values);
        res.status(200).send({
            status: 'success',
            data: rows
        });
    }
    catch(err) {
        console.log(err);
    }
}

       
export {
    createArticle,
    updateArticle,
    deleteArticle,
    getAllArticlesByCategoryId,
    getAllArticlesByEmployeeId
}