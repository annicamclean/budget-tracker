"use strict";

const express = require("express");
const router = express.Router();

const usercontroller = require("../controllers/user.controllers")

router.get("/all", usercontroller.getAllUsers);
router.post("/new", usercontroller.createNew);
router.get("/:id", usercontroller.getUserById);

module.exports = router;