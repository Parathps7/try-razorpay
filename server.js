const express = require("express")
const app =express();
const port = 3000;
const bodyparser = require("body-parser");
const Razorpay = require("razorpay")

app.use(bodyparser.json());
var instance = new Razorpay({
    key_id: '',
    key_secret: ''
})


app.listen(port,()=>{console.log("App is running!")})
