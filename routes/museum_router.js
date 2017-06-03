var express = require("express");
var museum = express.Router();

museum.get('/items/:id', function(req, res) {
  var museumFile = req.app.get('museumFile');
  var id = req.params.id;
  var teller = 0;
  var item = "";
  while (teller < museumFile.museum.length ) {
    if (museumFile.museum[teller].id == id) {
      item = museumFile.museum[teller];
    }
    teller++;
  }
  if (item !== "") {
    res.render("museum", {
      item: item
    });
  } else {
    res.render("404", {});
  }
});

module.exports = museum;
