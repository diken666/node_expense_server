const express = require('express');
const router = express.Router();
const db = require('../db/dbConnect');
const sql = require('../dbSql/sql');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    let uname = req.cookies["uname"];
    let token = req.cookies["token"];
    try {
        jwt.verify(token, uname);
        db.query(sql.getRoomInfo(), [], (err, roomData)=>{
            if(err) {
                res.json({
                    state: "error",
                    msg: "请求出错"
                })
            } else {
                db.query(sql.getUserInfo(), [], (err, userData)=>{
                    if ( err ){
                        res.json({
                            state: "error",
                            msg: "请求出错"
                        })
                    } else {
                        for ( let i=0; i<roomData.length; i++ ) {
                            for ( let j=0; j<userData.length; j++ ){
                                if ( roomData[i].uid  === userData[j].uid) {
                                    roomData[i].class = userData[j].class;
                                    break;
                                }
                            }
                        }
                        res.json({
                            state: "ok",
                            msg: "请求成功",
                            data: roomData
                        });
                    }
                });

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