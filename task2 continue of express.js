//parsing incoming request from form

const http  = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//since th eparsing of the body can be done irrespective of where our req ends up- matlab ki req kahi bhi ki jaa rahi ho uski parsing karna hi hai toh parsing wala middleware sabse upar rakhdo 
app.use(bodyParser.urlencoded({extended: false}));

app.use("/addproduct",(req,res,next)=>{
    res.send("<html><body><form action='/productData' method='POST'><lable>add product</lable><input type='text' name='product'></input><button type='submit'>add product</button></form></body></html>");
});

//middleware to handle resquest at the /proudctData url
//also we can place this below middleware function after of before the /addproduct middleware,since they have nothing reg the path
//here we are useing app.post to specify that the middleware will run only for the post req and not the get req . if we continue using app.use here , it will run for both post and get req.
app.post("/productData",(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');  
});

app.use((req,res,next)=>{
    res.send("<h1>welcome to express</h1>")
})

app.listen(4000)



/* note-
app.use(bodyParser.urlencoded({extended: false})); sets up a middleware that will parse incoming requests with URL-encoded data, 
making the parsed data available in the req.body object of your route handlers. This is commonly used for processing form submissions where 
the form data is sent in the body of the HTTP request. 


*/
