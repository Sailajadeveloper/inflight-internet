const express = require('express');
const app = express();
const router = express.Router();
const port = 2000;
const fs = require("fs")
// const bodyParser = require('body-parser') 
const cors = require('cors')
app.use(express.json());
// app.use(bodyParser.json())
app.use(cors());

app.get('/',(req,res)=>{
    res.send({data: "Request Raised Successfully!"})
})

require("./src/routes/planRoutes")(app, router);

app.listen(port,()=>{
    console.log(`Your Server is Running on ${port}!`);
})