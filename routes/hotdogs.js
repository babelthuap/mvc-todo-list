'use strict';

var express = require('express');
var router = express.Router();

router.get('/' , function(req, res) {
  res.send("Here's your hotdog, sir.\n")
});

router.post('/' , function(req, res) {
  console.log(req.body.hotdog);
  res.send("Hotdog received.\n");
});

module.exports = router;
