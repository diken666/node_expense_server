const express = require('express');
const router = express.Router();
const db = require('../db/dbConnect');
const sql = require('../dbSql/sql');
const jwt = require('jsonwebtoken');

router.post('/', (req, res)=>{
    let uname = req.cookies["uname"];
    let token = req.cookies["token"];
    try {
        jwt.verify(token, uname);
        let roomData = JSON.parse(req.body["roomData"]);
        let userRecord = JSON.parse(req.body["userRecord"]);
        let nowDate = req.body["nowDate"];
        let endDate = req.body["endDate"];

        db.query(sql.insertDataToRoomExpense(roomData, endDate), [], (err, response)=> {
            if ( err ) {
                console.log(err);
                res.json({
                    state: "error",
                    msg: "信息保存失败"
                })
            } else {
                db.query(sql.insertDataToRecord(roomData, endDate), [], (err, response)=> {
                    if ( err ) {
                        console.log(err);
                        res.json({
                            state: "error",
                            msg: "信息保存失败"
                        })
                    }
                    db.query(sql.insertDataToUserExpense(userRecord, nowDate), [], (err, response) => {
                        if ( err ) {
                            console.log(err);
                            res.json({
                                state: "error",
                                msg: "信息保存失败"
                            })
                        } else {
                            db.query(sql.insertDataToRecordDate(endDate), [], (err, response) => {
                                if ( err ) {
                                    console.log(err);
                                    res.json({
                                        state: "error",
                                        msg: "信息保存失败"
                                    })
                                }
                                res.json({
                                    state: "ok",
                                    msg: "房间信息保存成功"
                                })
                            })

                        }
                    })

                });
            }
        });
    } catch (e) {
        res.json({
            state: "error",
            msg: "未登录"
        })
    }

});

module.exports = router;