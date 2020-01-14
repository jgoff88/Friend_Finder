var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require("../Friend_Finder/app/routing/apiRoutes")(app);
require("../Friend_Finder/app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on Port: " + PORT);
});
