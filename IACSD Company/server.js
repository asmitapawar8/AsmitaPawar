const express=require("express");
var app=express();

// app.use(function(req,resp,next)
// {
//     console.log("Request URL: "+req.url+"Request Method: "+req.method);
// })
app.get("/",function(req,resp){
    resp.sendFile(__dirname+"/public/index.html")
})

app.get("/ordersummary",function(req,resp){
    resp.sendFile(__dirname+"/public/order.html")
})

app.listen(3300,function(req,resp){
    console.log("Server is running on port http://localhost:3300");
})