const express = require('express');

const app = express();

app.get("/download/expressauthgenerator",(req,res)=>{

    var file = __dirname + "/files/authgen";
    res.download(file);
});

app.listen(process.env.PORT || 3000,()=>console.log("Listening..."));
