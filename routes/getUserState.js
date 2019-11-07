const express = require('express');
const router = express.Router();
const db = require('../db/dbConnect');
const sql = require('../dbSql/sql');

router.get('/', (req, res) => {
    let userId = req.cookies["userId"];
    if (userId) {
        db.query(sql.selectMan(userId), [], (err, response)=>{
            if (err) {
                res.json({
                    state: "logout",
                    msg: "未登录"
                });
            } else {
                if (response.length === 1) {
                    res.json({
                        state: "login",
                        msg: "已登录"
                    });
                } else {
                    res.json({
                        state: "logout",
                        msg: "未登录"
                    });
                }
            }
        });
    } else {
        res.json({
            state: "logout",
            msg: "未登录"
        });
    }

});

module.exports = router;