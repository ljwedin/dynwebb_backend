var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    let user = req.body;
    console.log(user);
    let testRes = true;
    res.send(testRes);
});

router.post('/', (req, res) => {
    res.send('Hallå från servern!');
});

module.exports = router;