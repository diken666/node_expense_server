const express = require( 'express' );
const router = express.Router();
const db = require('../db/dbConnect');
const sql = require('../dbSql/sql');
const jwt = require('jsonwebtoken');

router.get('/', (req, res)=> {
    let token = req.cookies["token"];
    let uname = req.cookies["uname"];
    let rid = req.query;
    console.log(rid)
    try {
        jwt.verify(token, uname);
        db.query(sql, [], (err, resData) => {
            if( err ) {
                res.json({
                    state: "error",
                    msg: "请求出错！"
                })
            } else {
                res.json({
                    state: "ok",
                    msg: "操作成功！"
                })
            }
        })
    } catch (e) {
        res.json({
            state: "error", 
            msg: "未登录！"
        })
    }
})

module.exports = router;