var express = require("express");
var path = require("path");
var app = express();

app.set('nieuwsFile', require('./config/nieuws.json'));
app.set('categorieenFile', require('./config/categorieen.json'));
app.set('tagsFile', require('./config/tags.json'));
app.set('periodesFile', require('./config/periodes.json'));
app.set('uitvoerdersFile', require('./config/uitvoerders.json'));


app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'))

app.use(require("./routes/root_router"));
app.use(require("./routes/nieuws_router"));
app.use(require("./routes/categorieen_router"));
app.use(require("./routes/tags_router"));
app.use(require("./routes/periodes_router"));
app.use(require("./routes/uitvoerders_router"));

app.listen(app.get('port'), function() {
  console.log('Node luistert op poort', app.get('port'));
});
