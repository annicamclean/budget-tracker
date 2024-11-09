"use strict";
const db = require("../models/db-conn");

function getAll() {
    let sql = "SELECT * FROM budget;";
    const data = db.all(sql);
    return data;
}

function getOneById(id) {
    let sql = "SELECT * FROM budget WHERE id =? ;";
    const item = db.get(sql, id);
    return item;
}

function update(params) {
    let sql = 'UPDATE budgets' +
                'SET budget = ?' + 
                'WHERE id = ?';
    const item = db.run(sql, params);
    return item;
}