var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    req.app.locals.db.collection('users').find().toArray()
    .then(results => {
        console.log(req.body);
        let user = results.find(req.body._id);
        res.send(user);
    })
});


// router.post('/', (req, res) => {
//     req.app.locals.db.collection('users').find().toArray()
//     .then(results => {
//         for (let user in results) {
//             if (req.body.userName === results[user].userName) {
//                 if (req.body.password === results[user].password) {
//                     const userObject = results[user];
//                     const id = userObject._id;
//                     res.send(id);
//                     break;
//                 }
//             }
//         }
//     });
// });

router.post('/', (req, res) => {
    req.app.locals.db.collection('users').find().toArray()
    .then(results => {
        let userInfo;

        // console.log(typeof req.body.id);
        // console.log(typeof JSON.parse(results[3]._id));

        for (let user in results) {
            // let dbUser = JSON.parse(results[user]);
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


module.exports = router;