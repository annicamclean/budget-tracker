"use strict";
const express = require("express");
const router = express.Router();

const budgetcontroller = require("../controllers/budget.controllers");

router.get("/all", budgetcontroller.getAll);

router.get("/:id", budgetcontroller.getOneById);

router.put("/update", budgetcontroller.update);

module.exports = router;