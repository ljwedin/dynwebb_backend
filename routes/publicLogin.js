var express = require('express');
var router = express.Router();
const CryptoJS = require('crypto-js');

router.get('/', (req, res, next) => {
    res.send('testRes');
});

// Checks input credentials against database and returns id or false bool depending on results

router.post('/', (req, res) => {
    req.app.locals.db.collection('users').find().toArray()
    .then(results => {
        let id;

        for (let user in results) {
            if (req.body.userName === results[user].userName) {
                const passDb = CryptoJS.AES.decrypt(results[user].password, process.env.SALT_KEY).toString(CryptoJS.enc.Utf8);

                if (req.body.password === passDb) {
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