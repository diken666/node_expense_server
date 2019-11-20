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
        let date = req.body.date;
        //     water: null,
        //     elec: null,
        //     nowWaterSpd: null,
        //     nowElecSpd: null,
        //     nowWaterCost: null,
        //     nowElecCost: null,
        //     userData: []

        db.query(sql.insertDataToRoomExpense(roomData, date), [], (err, response)=> {
            if ( err ) {
                res.json({
                    state: "error",
                    msg: "房间信息保存失败"
                })
            } else {
                console.log(response);
                res.json({
                    state: "ok",
                    msg: "房间信息保存成功"
                })
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