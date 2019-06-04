const express = require('express');

const app = express();

app.get("/",function(req,res,next){
    res.send("Hi,This is my first node server");
});
app.get("/first",function(req,res,next){
    res.send("Hi,This is my first node server");
});
app.get("/second",function(req,res,next){
    res.send("Hi,This is my first node server");
});

app.listen(3000);
