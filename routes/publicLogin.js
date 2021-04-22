var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile('./public/userPage.html');
});

router.post('/add', (req, res) => {
  req.app.locals.db.collection('users').insertOne(req.body)
  .then(result => {
    console.log(result);
    res.redirect('/');
  })
})

module.exports = router;
