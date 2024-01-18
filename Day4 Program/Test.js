// const eventEmitter = require('events');

// class myEventEmitter extends eventEmitter{}

// const myEvent = new myEventEmitter();

// myEvent.on("demoEvent",()=>{
//     console.log("Hello")
// })

// myEvent.emit("demoEvent");
// myEvent.emit("demoEvent");
// myEvent.emit("demoEvent");
// myEvent.emit("demoEvent");
// console.log(myEvent.listenerCount("demoEvent"));
// console.log(myEvent.rawListeners("demoEvent"));

events = require('events');
const myEmitter = new events.EventEmitter();
function handler1() {
 console.log('an event occurred!');
}
function handler2() {
 console.log('yet another event occurred!');
}
myEmitter.on('eventOne', handler1); // Register for eventOne
myEmitter.on('eventOne', handler2); // Register for eventOne
myEmitter.emit('eventOne'); //We get two outputs
myEmitter.off('eventOne', handler1);
// Now if you emit the event as follows, only handler2 would respond
myEmitter.emit('eventOne');