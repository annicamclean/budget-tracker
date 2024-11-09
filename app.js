"use strict";
const express = require('express');
const app = express();
const path = require('path');

const multer = require("multer");
app.use(multer().none());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRouter = require("./routes/user.routes");
const budgetRouter = require("./routes/budget.routes");
const adminRouter = require("./routes/admin.routes");


app.get("/", (req, res) => {
    res.render('index');
});

app.get('/home', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.use('/admin', adminRouter);
app.use('/budget', budgetRouter);
app.use('/user', userRouter);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});