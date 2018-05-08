const express = require('express');

const app = express();
app.use( require("./routes/express_auth_generator") ); 

app.listen(process.env.PORT || 3000,()=>console.log("Listening..."));
