"use strict";

const express = require("express");
const app = express();

const multer = require("multer");
app.use(multer().none());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const model = require("../models/budget.models");


function getAll(req, res, next) {
    let budgets = model.getAll();
    try {
        res.render("budget", { budgets: budgets, title: 'Budget For' });
    } catch (err) {
        console.error("Error while getting all the bugets", err.message);
        next(err);
    }
}

/*function getAllByCategory(req, res, next) {
    let category = req.params.category;
    let meals = model.getAllByCategory(category)
    try {
        res.render("menu", { meals: meals, title: ' ' + category + ' Meals' });
    } catch (err) {
        console.error("Error while getting menu ", err.message);
        next(err);
    }
}*/

function getOneById(req, res, next) {
    try {
        let budget = model.getOneById(req.params.id);
        res.render("budget", { budget: budget, title: 'Budget For ' + req.params.date });
        // res.json(model.getOneById(req.params.id));
    } catch (err) {
        console.error("Error while getting budget for one month", err.message);
        next(err);
    }
}

function update(req, res, next) {
    let id = parseInt(req.body.id);
    let budget = model.getIncomeSum() - model.getExpenseSum();
    
    if (id && budget) {
        let params = [budget, id];
        try {
            let updatedBudget = model.update(params);
            res.render("budget", { budget: updatedBudget, title: 'Budget for ' + req.params.date });
            // res.json(model.createNew(params));
        } catch (err) {
            console.error("Error while updating budget ", err.message);
            next(err);
        }
    }
}

module.exports = {
    getAll,
    getOneById,
    update,
};