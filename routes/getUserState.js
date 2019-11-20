const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    let uname = req.cookies["uname"];
    let token = req.cookies["token"];
    try {
        jwt.verify(token, uname);
        res.json({
            state: "login",
            msg: "已登录"
        });
    }
    catch (e) {
        res.json({
            state: "error",
            msg: "未登录"
        });
    }
});

module.exports = router;