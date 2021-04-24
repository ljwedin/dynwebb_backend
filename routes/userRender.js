var express = require('express');
var router = express.Router();
const ObjectID = require('mongodb').ObjectID;

router.get('/', (req, res, next) => {
    req.app.locals.db.collection('users').find().toArray()
    .then(results => {
        console.log(req.body);
        let user = results.find(req.body._id);
        res.send(user);
    })
});

router.post('/', (req, res) => {
    req.app.locals.db.collection('users').find().toArray()
    .then(results => {
        let userInfo;

        for (let user in results) {
            console.log(results[user]);
            if (req.body.id == results[user]._id) {
                const userObject = results[user];
                userInfo = {
                    userName: userObject.userName,
                    email: userObject.email,
                    newsletter: userObject.newsletter
                }
            }
        }

        if (userInfo == undefined) {
            userInfo = false;
        }

        res.send(userInfo);
    });
});

router.post('/updatename', (req, res) => {
    const newUserName = req.body.userName;
    const id = req.body.id;

    req.app.locals.db.collection('users').updateOne({ _id: ObjectID(id) }, { $set: { userName: newUserName }})
    .then(result => {
        const updateResultObject = JSON.parse(result);
        const updateResult = { result: updateResultObject.result.n };
        res.send(updateResult);
    })  
})

router.post('/updateemail', (req, res) => {
    const newEmail = req.body.email;
    const id = req.body.id;

    req.app.locals.db.collection('users').updateOne({ _id: ObjectID(id) }, {$set: { email: newEmail }})
    .then(result => {
        const updateResultObject = JSON.parse(result);
        const updateResult = { result: updateResultObject.result.n };
        res.send(updateResult);
    })  
})

router.post('/updatenewsletter', (req, res) => {
    const newNewsletter = req.body.newsletter;
    const id = req.body.id;

    req.app.locals.db.collection('users').updateOne({ _id: ObjectID(id) }, { $set: { newsletter: newNewsletter }})
    .then(result => {
        const updateResultObject = JSON.parse(result);
        const updateResult = { result: updateResultObject.result.n };
        res.send(updateResult);
    })  
})

module.exports = router;