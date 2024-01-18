const fs = require("fs");
const http = require("http");

const routeResponseMap = {
    "/" : "./views/index.html",
    "/aboutus" : "./views/aboutus.html",
    "/contact" : "./views/contact.html",
    "/thankyou" : "./views/thankyou.html"
};

// fs.appendFile("test.txt", "This is the appended data",(err,data)=>{
//     if(err){
//        console.log(`Error appending $(err)`);
//     }
//    })

//    fs.writeFile("test.txt", "This is the appended data",(err,data)=>{
//     if(err){
//        console.log(`Error appending $(err)`);
//     }
//    })   

   // fs.rename("test.txt", "newtest.txt",(err,data)=>{
   //  if(err){
   //     console.log(`Error appending $(err)`);
   //  }
   // })

   // fs.unlink("deletefile.txt",(err,data)=>{
   //  if(err){
   //     console.log(`Error appending $(err)`);
   //  }
   // })
   
   // fs.open("NewFile.txt",((err,data)=>{if(err){console.log("Error")}}))

http.createServer((request,response)=>{
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
}).listen(3000)

// fs.readFile('./views/index.html', (err,data)=>{
//     if(err){
//        console.log(`Error reading file $(err)`);
//     }
//     else{
//        console.log(data.toString());
//     }
//    }) Before route, the code will be like this, after route is inplemented, the above part will be 
//like that.

//line# 23 for file is not found.

//Now we can send the data to server using response.write(), see it in previous ppt.
//If i give the path that file is not found,then it shows the error.

//if(err){
   // console.log(`Error reading file $(err)`);
 //}