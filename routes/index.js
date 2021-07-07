const express = require('express');
const router = express.Router();
const client = require('../db');
const send = require("send");

/* GET home page. */
router.get('/', function(req, res, next) {
  client.query('SELECT * FROM users', (err, response) => {
    if (err)
      throw err;

    res.render('index', { title: 'Express', users: response.rows});
  })
});

router.get('/createUser', (req, res) => {
  res.render('create-user');
});

router.post('/createUser', (req, res) => {
  console.log(req.body);
  if(!req.body) return send.status(404);
  const query = {
    text: 'INSERT INTO users(FirstName, LastName, Age, Email, Phone) VALUES($1, $2, $3, $4, $5)',
    values: Object.values(req.body),
  //    require.send(`${request.body.FirstName} - ${request.body.LastName}  - ${request.body.Age} - ${request.body.Email} - ${request.body.Phone}`);
  }


  res.redirect('/');
});


module.exports = router;
