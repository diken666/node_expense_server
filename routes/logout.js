const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let uname = req.cookies["uname"];
    let token = req.cookies["token"];
    res.cookie('uname', uname, { expires: new Date(Date.now()), singed: true});
    res.cookie('token', token, { expires: new Date(Date.now()), singed: true, httpOnly: true});
    res.json({
        state: "ok",
        msg: "logout"
    })
});

module.exports = router;