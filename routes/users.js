var express = require('express');
var router = express.Router();
var chatHistory = [];

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.json({message:'fhs chat-app api works...'});
});

router.get('/history', function(req, res, next) {
  res.send(chatHistory);
});

router.post('/history', function(req, res, next) {
  var date = new Date();

  chatHistory.push({ message: req.body.message, nickname:req.body.nickname});
  res.json({ message:'History created!' });
});

module.exports = router;
