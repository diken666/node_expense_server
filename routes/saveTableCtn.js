const express = require('express');
const router = express.Router();
const db = require('../db/dbConnect');
const sql = require('../dbSql/sql');

router.post('/', (req, res)=>{
    console.log(req.body);
    res.json({
        "state": "ok"
    })
});

module.exports = router;