const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let userId = req.cookies["userId"];
    if ( userId ) {
        res.cookie('userId', userId, { expires: new Date(Date.now()), singed: true, httpOnly: true});
        res.json({
            state: "ok",
            msg: "logout"
        })
    } else {
        res.json({
            state: "ok",
            msg: "not login"
        })
    }

});

module.exports = router;