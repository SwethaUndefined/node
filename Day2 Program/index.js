// const http = require("http");
// // const httpStatus = require('http-status-codes');
// const PORT = 3030;

// const routeMap = {
//     "/aboutus" : "respond with a message, Show a aboutus web page",
//     "/contactus" : "respond with a message, Show a aboutus web page",
//     "/" : "respond with a message, hello everyone at upgrad"
// }

// const app = http.createServer((request,response)=>{
//         console.log("Received an oncoming request from client")
//         // response.writeHead(httpStatus.StatusCodes.OK)
//     if(request.url =="/aboutus"){
//         response.write("Welcome to about Page")
//         response.end();
//     }
//     else{
//         response.write("Welcome to other Page")
//                 response.end();
//     }
// })

// app.listen(PORT,()=>{
//    console.log(`Connecting to port ${PORT}`)
// })









const http = require("http");

const port = 8080;

var app = http.createServer((req,res)=>{
    res.write("Welcome");
    res.end()
})

app.listen(port,()=>{
    console.log("Running on port 8080")
})

