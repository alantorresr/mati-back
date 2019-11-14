var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/mati-response', (req, res, next) => {
  res.send('Mati');
  console.log("req.body:")
  console.log(req.body)
});

module.exports = router;
