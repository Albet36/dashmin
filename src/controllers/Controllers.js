class Controllers{
    home(req,res,next){
        res.render("home");
    }
    notFound(req,res,next){
        res.render("404");
    }
    chart(req,res,next){
        res.render("chart");
    }
    form(req,res,next){
        res.render("form");
    }
    table(req,res,next){
res.render("table");
    }
    widget(req,res,next){
        res.render("widget");
    }
    addItem(req,res,next){
        res.render("addItem");
    }
    login(req,res,next){
        res.render("signin",{layout: "main_login.hbs"});
    }
    register(req,res,next){
        res.render("register",{layout: "main_login.hbs"});
    }
}
module.exports = new Controllers();