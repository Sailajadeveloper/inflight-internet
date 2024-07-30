const express = require('express');
const app = express();
const router = express.Router();
const port = 2000;
const fs = require("fs")
app.use(express.json());

app.get('/',(req,res)=>{
    res.send({data: "Request Raised Successfully!"})
})

require("./src/routes/planRoutes")(app, router);

app.listen(port,()=>{
    console.log(`Your Server is Running on ${port}!`);
})