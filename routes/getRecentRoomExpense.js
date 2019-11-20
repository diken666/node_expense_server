const express = require('express');
const router = express.Router();
const db = require('../db/dbConnect');
const sql = require('../dbSql/sql');
const jwt = require('jsonwebtoken');

router.get('/', (req, res)=>{
    let uname = req.cookies["uname"];
    let token = req.cookies["token"];
    try {
        jwt.verify(token, uname);
        db.query(sql.getRecentRoomRecord(), [], (err, data)=> {
            if( err ) {
                res.json({
                    state: "error",
                    msg: "请求出错"
                })
            } else {
                res.json({
                    state: "ok",
                    msg: "请求成功",
                    data: data
                })
            }
        })
    } catch (e) {
        res.json({
            state: "error",
            msg: "未登录"
        })
    }
});

module.exports = router;