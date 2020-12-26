import pool from "./pool";

pool.on('connected to db', () => {
    console.log('Connected to database');
});

