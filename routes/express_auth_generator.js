const app = require("express").Router();

app.get("/download/express_auth_generator",(req,res)=>{

    var file = __dirname + "/files/install";
    res.download(file);
});

app.get("/download/getauthgen",(req,res)=>{

    var file = __dirname + "/files/authgen";
    res.download(file);
});

module.exports = app;
