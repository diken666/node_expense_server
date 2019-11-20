const express = require('express');
const router = express.Router();
const db = require('../db/dbConnect');
const sql = require('../dbSql/sql');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    res.json({
        state: "error",
        msg: "请求出错"
    })
});


router.post('/', (req, res) =>{
    let id = req.body.id;
    let psw = req.body.psw;
    if (id && psw) {
        db.query(sql.selectMan(id), [], (err, response) => {
            if (err) {
                res.json({
                    state: "error",
                    msg: "服务端发生错误！"
                });
                throw Error(err);
            } else {
                if (response.length === 1) {
                    if (response[0].password === psw) {
                        let token = jwt.sign({ uname: response[0].name }, response[0].name);
                        res.cookie('uname', response[0].name, { expires: new Date(Date.now() + 60 * 60 * 1000), singed: true});
                        res.cookie('token', token, { expires: new Date(Date.now() + 60 * 60 * 1000), singed: true, httpOnly: true});
                        res.json({
                            state: "ok",
                            msg: "请求成功",
                            data: response
                        })
                    } else {
                        res.json({
                            state: "error",
                            msg: "密码错误"
                        })
                    }
                } else {
                    res.json({
                        state: "error",
                        msg: "不存在该用户"
                    })
                }
            }
        });

    } else {
        res.json({
            state: "error",
            msg: "信息不完整"
        })
    }
});

module.exports = router;