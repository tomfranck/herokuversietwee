var express = require("express");
var periodes = express.Router();

periodes.get('/periodes/:id', function(req, res) {
  res.render("periode", {
      id: Number(req.params.id),
      items: req.app.get('museumFile').museum,
      periodes: req.app.get('periodesFile').periodes
  });
});

module.exports = periodes;
