var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    let user = req.body;
    console.log(user);
    let testRes = true;
    res.send('testRes');
});

// POST test
// router.post('/', (req, res) => {
//     let testRes = true;
//     res.send(testRes);
// });

router.post('/', (req, res) => {
    console.log(req.body.userName);

    req.app.locals.db.collection('users').find().toArray()
    .then(results => {
        for (let user in results) {
            if (req.body.userName === results[user].userName) {
                if (req.body.password === results[user].password) {
                    const userObject = results[user];
                    const id = userObject._id;
                    res.send(id);
                }
            } else {
                res.send(false);
            }
        }
    })
});

module.exports = router;