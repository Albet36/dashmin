const Controllers = require("../controllers/Controllers");

function routes(app) {
    app.get("/home",Controllers.home);
    app.get("/chart",Controllers.chart);
    app.get("/form",Controllers.form);
    app.get("/table",Controllers.table);
    app.get("/widget",Controllers.widget);
    app.get("/404",Controllers.notFound);
    app.get("/additem",Controllers.addItem);
    app.get("/login",Controllers.login);
    app.get("/register",Controllers.register);
    app.get("/additem",Controllers.addItem);


}
module.exports = routes;