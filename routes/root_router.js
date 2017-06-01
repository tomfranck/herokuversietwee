var express = require("express");
var root = express.Router();

root.get('/', function(req, res) {
  res.render("index", {
    nieuws: req.app.get('nieuwsFile').nieuws,
    categorieen: req.app.get('categorieenFile').categorieen,
    tags: req.app.get('tagsFile').tags,
    periodes: req.app.get('periodesFile').periodes,
  });
});

module.exports = root;
