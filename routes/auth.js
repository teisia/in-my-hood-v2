var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/spotify', passport.authenticate('spotify', {scope: ['user-read-email', 'user-read-private'], showDialog: true}));

router.get('/logout', function(req, res, next) {
  req.session = null;
  res.redirect('/');
});

router.get('/spotify/callback',
  passport.authenticate('spotify', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  });

module.exports = router;
