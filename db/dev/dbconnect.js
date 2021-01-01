import pool from "./pool";

pool.on('connected to db', () => {
    console.log('Connected to database');
});

const createEmployeeTable = () => {
    const createEmployeeQuery = `CREATE TABLE IF NOT EXISTS employee 
    (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(100),
        last_name VARCHAR(100),
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL,
        image VARCHAR(200) NOT NULL,
        department NOT NULL,
        role_id INTEGER DEFAULT 0,
        address VARCHAR(200) NOT NULL,
        created_on timestamp,
        modified_on timestamp
    );
    `;
    pool.query(createEmployeeQuery)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch(err => {
            console.log(err);
            pool.end();
        })
}


const createGifTable = () => {
    const createGifQuery = `CREATE TABLE IF NOT EXISTS gif (
        id SERIAL PRIMARY KEY,
        title VARCHAR(200) NOT NULL,
        imageUrl VARCHAR(200) NOT NULL,
        created_on timestamp,
        modified_on timestamp
        )
    `;
    pool.query(createGifQuery)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch(err => {
            console.log(err);
            pool.end();
    })
}

const createArticleTable = () => {
    const createArticleQuery = `CREATE TABLE IF NOT EXIST article
    (
        id SERIAL PRIMARY KEY,
        title VARCHAR(200) NOT NULL,
        article_body VARCHAR(200) NOT NULL,
        featured_image VARCHAR(200) NOT NULL,
        created_on timestamp,
        modified_on timestamp
    )
    `;
    pool.query(createArticleQuery)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch(err => {
            console.log(err);
            pool.end();
    })
}

const createArticleCommentTable = () => {
    const articleCommentQuery = `CREATE TABLE IF NOT EXISTS articlecomment (
        id SERIAL PRIMARY KEY,
        employeeId INTEGER REFERENCES employee(id) ON DELETE CASCADE,
        articleId INTEGER REFERENCES article(id) ON DELETE CASCADE,
        commentBody VARCHAR(250) NOT NULL
    )`;
    pool.query(articleCommentQuery)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch(err => {
            console.log(err);
            pool.end();
    })

}

const createGifCommentTable = () => {
    const gifCommentQuery = `CREATE TABLE IF NOT EXISTS gifcomment (
        id SERIAL PRIMARY KEY,
        title VARCHAR(150),
        employeeId INTEGER REFERENCES employee(id) ON DELETE CASCADE,
        gifId INTEGER REFERENCES gif(id) ON DELETE CASCADE,
        commentBody VARCHAR(250) NOT NULL
    )`;
    pool.query(gifCommentQuery)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch(err => {
            console.log(err);
            pool.end();
    })
}

/** Dropping Tables **/

const dropEmployeeTable = () => {
    const employeeDropQuery = `DROP TABLE IF EXISTS employee`;
    pool.query(employeeDropQuery)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch(err => {
            console.log(err);
            pool.end();
    })
}

const dropGifTable = () => {
    const gifDropQuery = `DROP TABLE IF EXISTS gif`;
    pool.query(gifDropQuery)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch(err => {
            console.log(err);
            pool.end();
    })
}

const dropGifCommentTable = () => {
    const gifCommentTableDropQuery = `DROP TABLE IF EXISTS gifcomment`;
    pool.query(gifCommentTableDropQuery)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch(err => {
            console.log(err);
            pool.end();
    })
}

const dropArticleCommentTable = () => {
    const articleCommentTableDropQuery = `DROP TABLE IF EXISTS articlecomment`;
    pool.query(articleCommentTableDropQuery)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch(err => {
            console.log(err);
            pool.end();
    })
}

const dropArticleTable = () => {
    const articleTableDropQuery = `DROP TABLE IF EXISTS article`;
    pool.query(articleTableDropQuery)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch(err => {
            console.log(err);
            pool.end();
    })
}

/**
 *  Create All Tables
 **/

const createAllTables = () => {
    createArticleCommentTable();
    createArticleTable();
    createEmployeeTable();
    createGifCommentTable();
    createGifTable();
}

/** 
 * Drop All Table
**/

const dropAllTables = () => {
    dropEmployeeTable();
    dropGifCommentTable();
    dropArticleCommentTable();
    dropGifTable();
    dropArticleTable();
}

pool.on('remove', () => {
    console.log('client removed');
    process.exit(0);
});

export{
    createAllTables,
    dropAllTables
};

require('make-runnable');