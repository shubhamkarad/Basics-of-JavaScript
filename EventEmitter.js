var events = require("events");
var eventEmitter = new events.EventEmitter();

// Create an event Handler
var eventHandler = () => {
  console.log("It will Pop up when you scream");
};

// Assign the event Handler to an event
eventEmitter.on("scream", eventHandler);

// Fire the "scream event"
eventEmitter.emit("scream");
