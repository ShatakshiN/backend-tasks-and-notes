const http = require('http');

const express = require('express'); //imports express framework

const app = express();//this line creates an instance of the Express application. The app variable is an object that represents your web application and is used to configure routes, middleware, and other settings.
app.use((req,res,next)=>{
    console.log('this is the first middleware');
    next(); //if we dont use next() then we will not be able to execute the 2nd middleware function
});

app.use((req,res,next)=>{
    console.log('this is the 2nd middleware');
    res.send('<h1>hello from express</h1>'); //sending response to the page

});

//const server = http.createServer(app);
//server.listen(4000);

app.listen(4000); //If you replace server.listen(4000); with app.listen(4000);, you are essentially using a shorthand provided by Express.js. The app.listen method is a convenience method that combines the creation of an HTTP server and the listening on a specified port.
