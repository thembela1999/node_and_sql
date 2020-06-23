"use strict";
const {
    Pool
} = require('pg')

const pool = new Pool({
    host: "localhost",
    user: "user",
    database: "db",
    password: "pass",
    port: 5432,
});
pool.connect();
const createTable = async() => {
    try {
        const query = await pool.query(`CREATE TABLE IF NOT EXISTS
        visitors(

        ID SERIAL PRIMARY KEY,
        visitor_name VARCHAR(50),
        visitor’s_age INT,
        date_of_visit DATE,
        time_of_visit TIME,
        assistant VARCHAR(50),
        comments VARCHAR(200)
    )`);


        console.log(query)
        console.log("table successfuly created")


    } catch (e) {
        console.log(e)
    }
};
createTable();
const addNewVisitor = async(name, age, date, time, assistant, comments) => {
    try {
        const query = await pool.query(
            'INSERT INTO VISITORS(visitor_name,visitors_age,date_of_visit,time_of_visit,assistant,comments) VALUES ($1,$2,$3,$4,$5,$6)', [name, age, date, time, assistant, comments]
        )
        console.log(query.rows)
        console.log('data is saved')

    } catch (e) {
        console.log(e);

    };
};

const listVisitor = async() => {
    try {
        const query = await pool.query(
            `
            SELECT ID , visitor_name FROM VISITORS;`

        )
        console.log(query.rows)
        console.log(' listed successfully')

    } catch (e) {
        console.log(e);

    };
};

const deleteVisitor = async() => {
    try {
        const query = await pool.query(
            `
          DELETE  FROM VISITORS WHERE id = ${1}
          ;`
        )
        console.log(query)
        console.log('deleted successfully')

    } catch (e) {
        console.log(e);

    };
};

const updateVisitor = async(name, assistant) => {
    try {
        const query = await pool.query(
            `
            UPDATE  VISITORS SET visitor_name= 'thembela', assistant ='amanda' WHERE ID=${2}
          ;`
        )
        console.log(query.rows)
        console.log('updated successfully')

    } catch (e) {
        console.log(e);

    };
};


const viewVisitor = async() => {
    try {
        const query = await pool.query(
            `
            SELECT * FROM VISITORS WHERE ID=${1}
          ;`
        )
        console.log(query.rows)
        console.log('viewed successfully')

        return query.rows

    } catch (e) {
        console.log(e);

    };
};

const deleteAllVisitors = async() => {
    try {
        const query = await pool.query(
            `
            DELETE  FROM VISITORS 
          ;`
        )
        console.log(query)
        console.log('deleted successfully')

    } catch (e) {
        console.log(e);

    };
};

addNewVisitor();



module.exports = {

    addNewVisitor,
    listVisitor,
    deleteVisitor,
    updateVisitor,
    viewVisitor,
    deleteAllVisitors
};

addNewVisitor('thembela', 21, '05/01/2020', '09:00', 'amanda', 'excellent');