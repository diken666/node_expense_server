const express = require( 'express' );
const router = express.Router();
const db = require('../db/dbConnect');
const sql = require('../dbSql/sql');
const jwt = require('jsonwebtoken');

// 获取默认房间信息
// 房间号 上期水表数 本期水表数	本期电表数	本期电表数	本期用水(吨) 本期用电(度) 本期水费(元) 本期电费(元)	费用总计(元)
router.get('/', (req, res) => {
    let uname = req.cookies["uname"];
    let token = req.cookies["token"];
    console.log("--->", jwt.verify(token, uname));
    try {
        jwt.verify(token, uname);
        res.json({
            state: "ok",
            msg: "操作成功！"
        });
    } catch( e ) {
        res.json({
            state: "error",
            msg: "未登录"
        })
    }
})

module.exports = router;