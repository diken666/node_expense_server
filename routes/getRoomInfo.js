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