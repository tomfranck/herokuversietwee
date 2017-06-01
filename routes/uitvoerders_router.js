var express = require("express");
var uitvoerders = express.Router();

uitvoerders.get('/uitvoerders/:id', function(req, res) {
  res.render("uitvoerder", {
      id: Number(req.params.id),
      items: req.app.get('nieuwsFile').nieuws,
      uitvoerders: req.app.get('uitvoerdersFile').uitvoerders
  });
});

module.exports = uitvoerders;
