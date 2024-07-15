const express = require("express")
const app =express();
const port = 3000;
const bodyparser = require("body-parser");
const Razorpay = require("razorpay")

app.use(bodyparser.json());
var instance = new Razorpay({
    key_id: 'rzp_live_t6X8QiiXL7J6wG',
    key_secret: 'FdATvZqjb7lpX3VPpcQoAMCl'
})


app.listen(port,()=>{console.log("App is running!")})
