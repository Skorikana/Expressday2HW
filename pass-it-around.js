//99 beers on the wall// Day 2 Homework

//Load the express
const express = require("express");

//Instantiate the express
const app     = express()
const port    = 3000;

//Routes
app.get("/" ,(req,res) =>{
      res.send(`<h2>99 Bottles of beers on the wall <a href ="/98"><br/>Take 1 down,Pass it around</a></h2>`);
        });

app.get ("/:numOfBottles", (req,res) =>{
    const numOfBottles = req.params.numOfBottles;
    if(req.params.numOfBottles <= 0){
        res.send(`<a href ="/"><h3> Start again</h3></a>`)
    }
    else if(req.params.numOfBottles >99){
        res.send(`<a href ="/"><h3> Start again</h3></a>`)
    }
    else{
        res.send(`<h2>${req.params.numOfBottles}</h2>bottles left  <a href = "${numOfBottles -1}"><br/><h2>Take 1 down, Pass it around</h2></a>`);
    }
})
//Tell the express to listen
app.listen(port, () =>{
    console.log(`Listening on ${port}`)
})
