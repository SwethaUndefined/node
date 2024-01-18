const http = require('http');
const fs = require('fs');
const PORT = 8080;


const routeResponseMap ={
    "/" : "./views/index.html",
    "/aboutus" : "./views/aboutus.html",
    "/contact" : "./views/contact.html",
    "/thankyou" : "./views/thankyou.html"
}
//   fs.appendFile("test.txt","This is the added content",(err)=>{
//     if(err){
//         console.log(err);
//     }
//   } )

   fs.writeFile("test.txt", "New text",(err)=>{
    if(err){
        console.log(err);
    }
})
    fs.rename("test.txt","test1.txt",(err)=>{
        if(err){
            console.log(err);
        }
    })
    fs.unlink("dummy.txt",(err)=>{
        if(err){
            console.log(err);
        }
    })
var app = http.createServer((request,response)=>{
    if(routeResponseMap[request.url]){
     fs.readFile(routeResponseMap[request.url], (err,data)=>{
         if(err){
            console.log(`Error reading file $(err)`);
         }
         else{
             response.write(data);
             response.end();
         }
        })
    }
    else{
     response.writeHead(404);
     response.write("<h1>Not found </h1>");
     response.end();
    }
})
app.listen(PORT,()=>{
    console.log("Connected to port 8080")
})
