const express = require('express');
const router = express.Router();
const db = require('../db/dbConnect');
const sql = require('../dbSql/sql');

router.get('/', (req, res) => {
    let userId = req.cookies["userId"];
    if (userId) {
        db.query(sql.selectMan(userId), [], (err, response)=> {
            if ( err ) {
                res.json({
                    state: "error",
                    msg: "请求出错"
                })
            } else {
                if ( response.length >= 1 ) {
                    db.query(sql.getRoomInfo(), [], (err, response)=>{
                        if(err) {
                            res.json({
                                state: "error",
                                msg: "请求出错"
                            })
                        } else {
                            res.json({
                                state: "ok",
                                msg: "请求成功",
                                data: response
                            })
                        }
                    })
                } else {
                    res.json({
                        state: "logout",
                        msg: "未登录"
                    })
                }
            }
        });
    } else {
        res.json({
            state: "logout",
            msg: "未登录"
        })
    }

});

module.exports = router;