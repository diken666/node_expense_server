const express = require('express');
const router = express.Router();
const db = require('../db/dbConnect');
const sql = require('../dbSql/login');

router.get('/', (req, res) => {
    let userId = req.cookies["userId"];
    if (userId) {
        res.json({
            state: "error",
            msg: "请求出错"
        })
    } else {
        console.log("123");
        res.redirect('/');
    }

});

module.exports = router;