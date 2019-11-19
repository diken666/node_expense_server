const express = require('express');
const router = express.Router();
const db = require('../db/dbConnect');
const sql = require('../dbSql/sql');

router.get('/', (req,res)=> {
    let userId = req.cookies["userId"];
    if (userId) {
        db.query(sql.selectMan(userId), [], (err, response)=>{
            if (err) {
                res.json({
                    state: "error",
                    msg: "未登录"
                });
            } else {
                if (response.length === 1) {
                    db.query(sql.getRecentRecordDate(), [], (err, data)=>{
                        if ( err ) {
                            res.json({
                                state: "error",
                                msg: "请求错误"
                            });
                        }
                        res.json({
                            state: "ok",
                            msg: "获取成功",
                            data
                        });
                    });
                } else {
                    res.json({
                        state: "error",
                        msg: "未登录"
                    });
                }
            }
        });
    } else {
        res.json({
            state: "error",
            msg: "未登录"
        });
    }
});

module.exports = router;