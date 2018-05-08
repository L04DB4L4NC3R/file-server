const app = require("express").Router();

app.get("/download/express_auth_generator",(req,res)=>{

    var file = (__dirname).split("routes")[0] + "/files/EAS/install";
    res.download(file);
});

app.get("/download/getauthgen",(req,res)=>{

    var file = (__dirname).split("routes")[0] + "/files/EAS/authgen";
    res.download(file);
});

module.exports = app;
