var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mati-response', (req, res, next) => {
  res.send('Mati');
  console.log("reqq.body:")
  console.log(req.body)
});

module.exports = router;
