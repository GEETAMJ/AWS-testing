const express = require('express');
const bodyparser = require('body-parser')
const app = express();
 
app.use(express.static("static"));
 
app.use(bodyparser.urlencoded({extended:false}));

app.set("view engine","ejs");
 
app.get("/", function(req, res, next) {
    res.send("Hi, This is my first node server");
});
 
app.get("/first", function(req, res, next) {
    if(req.query.greeting=='1')    //localhost:3000/first?greeting=1&meeting=0&...... can be the query string
    {              
        res.send("Hey,this is the second route!");
    }
    else{
        res.send("Bye");
    }
    //res.send("Hi, This is my first node server, first page");
});
 
app.get("/second", function(req, res, next) {
    res.send("Hi, This is my first node server, second page");
});
app.get("/third",function(req,res,next){
    if(req.query.q == "node"){
    res.render("test1",{
        title:"NODe JS",
        topic:"EJS template eng",
        status:"1",
        fruits:["apple","mango","bnana"],  //going on :1
        error:{code:0,msg:"no error"}});
    } else if(req.query.q == "python")
    {
        res.render("test1",{
            title:"python",
            topic:"Intro to python",
            status:"g0",
            fruits:["dcidc","hbshdbhdbc","chdcbdu","ncud"],  //not started:0
            error:{code:1,msg:"not started"}});
    } else{
        res.render("test1",{
            title:"NO",
            topic:"NO",
            status:"2",
            fruits:[], 
            error:{code:2,msg:"topic not found"}});                  //done:2
    }
});
app.post("/query", function(req, res, next) {
    // res.send(Math.random() + " " + JSON.stringify(req.body));
    if(! req.body.username) {
        res.send("Username field is empty");
        return;
    }
    if(! req.body.password) {
        res.send("Password field is empty");
        return;
    }
    res.send("Your username is "+req.body.username+" and password is "+req.body.password);
});
 app.get("/random",function(req,res,next){
    res.send(""+Math.floor(Math.random()*100000));   //if res.send gets an integer then it processes it as a status code
 });                                                 //so we convert it to a string 
app.listen(3000);
// json is JavaScript object notation
// methods of POST request:
// JSON body parser
// url-encoded parser
// Text
// raw
// all middle-wares get three arguments :
// request,response and next
// next is present to call the next middleware