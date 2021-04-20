var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  req.app.locals.db.collection('users').find().toArray()
  .then(results => {
    console.log(results);
  })
  
  res.send('respond with a resource');
});

router.post('/add', (req, res) => {
  req.app.locals.db.collection('users').insertOne(req.body)
  .then(result => {
    console.log(result);
    res.redirect('/');
  })
})

module.exports = router;
