const express = require( 'express' );
const router = express.Router();
const db = require('../db/dbConnect');
const sql = require('../dbSql/sql');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    let uname = req.cookies["uname"];
    let token = req.cookies["token"];
    try {

    } catch( e ) {
        res.json({
            state: "error",
            msg: "未登录"
        })
    }
})

module.exports = router;