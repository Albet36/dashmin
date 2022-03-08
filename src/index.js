const express = require("express");
const app = express();
const path = require("path");
const port = process.env.port || 2001;
const {engine} = require("express-handlebars");
const routes = require("./routes/routes");


app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.urlencoded({extended: true}));
app.set('views',path.join(__dirname,"Resources\\views"));
app.use("*/css",express.static(path.join(__dirname,"public/css")));
app.use("*/js",express.static(path.join(__dirname,"public/js")));
app.use("*/img",express.static(path.join(__dirname,"public/img")));
app.use("*/lib",express.static(path.join(__dirname,"public/lib")));
routes(app);
app.listen(port, ()=> console.log(`localhost:${port}`));