var express = require('express');
var router = express.Router();
const CryptoJS = require('crypto-js');

router.post('/', (req, res, next) => {
    const userPass = req.body.password;
    const cryptPass = CryptoJS.AES.encrypt(userPass, process.env.SALT_KEY).toString();

    req.app.locals.db.collection('users').insertOne({
        userName: req.body.userName,
        password: cryptPass,
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