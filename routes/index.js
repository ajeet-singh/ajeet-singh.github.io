var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {env: process.env.NODE_ENV});
});

router.get('/:view/:prod?', function(req, res) {
  res.render(req.params.view, {prod: !!req.params.prod});
});

module.exports = router;
