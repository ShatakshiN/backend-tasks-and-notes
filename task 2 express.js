//route handling for various URLs
const http = require('http');

const express = require('express');

const app = express();

//runs for all the URLs
app.use((req,res,next)=>{
    console.log('this always runs');
    next(); // here we can use next since we are not sending a response and this middleware runs for all the URLs.
})
// send a response for only /addproduct URL
app.use("/addproduct",(req,res,next)=>{
    console.log('we are in the product page')
    res.send('<h1>welcome to the product page</h1>');
    //next() if we use next() after sending a response then we will encounter an error saying  can't set headers after they're sent to the client 

})

//send a response to all the urls except /addproduct
app.use((req,res,next)=>{
    console.log('this is the 2nd middleware');
    res.send('<h1>hello from express</h1>');

})

app.listen(4000);

/* note in the second middleware function we are adding a path ie addproduct. ie when we are on the addproduct url the follwing response will be
 sent.

 if we add only "/" as the path, then that middleware will run for all the urls .since "/" is not a compelete url but every url starts with "/".
 
  */
