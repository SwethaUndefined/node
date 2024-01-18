const http = require('http');
const fs = require('fs');
const PORT = 8080;
 
 const routeResponseMap = {
    "/" : "./views/index.html",
    "/about" : "./views/aboutus.html",
    "/thankyou" : "./views/thankyou.html",
    "/contact" : "./views/contact.html"
 }

var app = http.createServer((req,res)=>{
      if(routeResponseMap[req.url]){
        if(req.url.indexOf(".html")!==-1){
            `./views ${req.url}`
         }
        fs.readFile(`./views ${req.url}`, (err,data)=>{
            if(err){
               console.log(`Error reading file $(err)`);
            }
            else{
                res.write(data);
                res.end();
            }
           })
       }
})

app.listen(PORT,()=>{
    console.log(`Connected to port ${PORT}`)
})