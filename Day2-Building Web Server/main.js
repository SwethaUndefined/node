const http = require('http');
const PORT = 3000;

const httpStatus = require('http-status-codes');

const routeResponseMap = {
    "/info" : "<h1>Info Page</h1>",
    "/contact" : "<h1>Contact us at 9047382427</h1>",
    "/home" : "<h1>Home Page</h1>",
    "/" : "<h1>Home Page</h1>"
}

var app = http.createServer((request,response)=>{
    // console.log("Received an oncoming request from client")
    response.writeHead(httpStatus.StatusCodes.OK)//usually it could be okay(OK) only.
    // console.log(request);
    console.log(request.url);
    // console.log(request.method);


    // if(request.url=="/home"){
    //     response.write("Welcome to Home Page")
    // }
    // else{
    //     response.write("Welcome to other Page")
    // }


    if(routeResponseMap[request.url]){
        response.write(routeResponseMap[request.url]);
    }
    else{
        response.write("Respone not found");
    }


    // response.write("Welcome to learning web server");
    response.end();
})

app.listen(PORT,()=>{
    console.log(`Connecting to server port ${PORT}`)
});