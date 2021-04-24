var express = require('express');
var router = express.Router();
const CryptoJS = require('crypto-js');

router.get('/', (req, res, next) => {
    let user = req.body;
    console.log(user);
    let testRes = true;
    res.send('testRes');
});

router.post('/', (req, res) => {
    req.app.locals.db.collection('users').find().toArray()
    .then(results => {
        let id;

        for (let user in results) {
            if (req.body.userName === results[user].userName) {
                if (req.body.password === results[user].password) {
                    const userObject = results[user];
                    id = userObject._id;
                }
            }
        }

        if (id === undefined) {
            id = false;
        }
        res.send(id);
    });
});

module.exports = router;