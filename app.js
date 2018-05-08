const express = require('express');

const app = express();

app.get("/download/express_auth_generator",(req,res)=>{

    var file = __dirname + "/files/install";
    res.download(file);
});

app.get("/download/getauthgen",(req,res)=>{

    var file = __dirname + "/files/authgen";
    res.download(file);
});


app.listen(process.env.PORT || 3000,()=>console.log("Listening..."));
