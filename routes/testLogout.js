const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.cookie('userId', 'test', { expires: new Date(Date.now()), singed: true, httpOnly: true});
    res.json({
        state: "ok",
        msg: "logout"
    })
});

module.exports = router;