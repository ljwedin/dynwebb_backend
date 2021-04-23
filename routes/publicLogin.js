var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    let user = req.body;
    console.log(user);
    let testRes = true;
    res.send('testRes');
});

router.post('/', (req, res) => {
    let testRes = true;
    res.send('testRes');
});

module.exports = router;