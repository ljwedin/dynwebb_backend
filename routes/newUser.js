var express = require('express');
var router = express.Router();

router.post('/', (req, res, next) => {
    req.app.locals.db.collection('users').insertOne({
        userName: req.body.userName,
        password: req.body.password,
        email: req.body.email,
        newsletter: req.body.newsletter
    })
    .then(result => {
        const updateResultObject = JSON.parse(result);
        const updateResult = { result: updateResultObject.result.n };
        res.send(updateResult);
    })
});

module.exports = router;