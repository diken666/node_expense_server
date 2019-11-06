const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.cookie('userId', 'test', { expires: new Date(Date.now() + 60 * 60 * 1000), singed: true, httpOnly: true});
    res.json({
        state: "ok",
        msg: "go"
    })
});

module.exports = router;