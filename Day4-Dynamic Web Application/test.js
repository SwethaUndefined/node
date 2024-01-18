const EventEmitter = require("events");

class MyEmitter extends EventEmitter{};

const myEmitter = new MyEmitter();

const callback = ()=>{
    console.log("demoEvent triggered for callback1")

}

const callback2 = ()=>{
    console.log("demoEvent triggered for callback2")

}
// myEmitter.on("demoEvent", ()=>{
//     console.log("demoEvent triggered")
// });  

// myEmitter.once("demoEvent", ()=>{
//     console.log("demoEvent triggered")
// });        

myEmitter.on("demoEvent",callback);
myEmitter.on("demoEvent",callback2);

myEmitter.emit("demoEvent");//Without this line it wont run.
myEmitter.emit("demoEvent");
myEmitter.off("demoEvent",callback);
myEmitter.emit("demoEvent");
myEmitter.emit("demoEvent");

console.log(myEmitter.listenerCount("demoEvent"));
console.log(myEmitter.rawListeners("demoEvent"));