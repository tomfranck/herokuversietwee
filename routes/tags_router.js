var express = require("express");
var tags = express.Router();

tags.get('/tags/:id', function(req, res) {
  res.render("tag", {
      id: Number(req.params.id),
      items: req.app.get('museumFile').museum,
      tags: req.app.get('tagsFile').tags
  });
});

module.exports = tags;
