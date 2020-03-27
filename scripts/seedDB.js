const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/virtualhost"
);

const userSeed = [
  {
    first_name: "Demo",
    last_name: "User",
    username: "demouser",
    password: "user12DEMO",
    email: "user@demo.com"
  }
];

const eventSeed = [
  {
    event_name: "Presentations",
    image: "image",
    location: "Charlotte, NC",
    start_time: new Date("2020/04/04 10:00:00"),
    end_time: new Date("2020/04/04 14:00:00"),
    description: "UNC-Charlotte Full Stack Project Presentations",
    host_id: "",
    vendors: []
  }
];

const vendorSeed = [{                
  "vendor_name": "Virtual Host",
  "image": "../images/virtualHost.png",
  "beacon_id": 1234,
  "web_url": "https://virtual-host.herokuapp.com/",
  "description": "Virtual Host Using notifications on your phone to guide you through the event, informing you along the way.",
  "manager_id": 1,
  "event_id": "1234demo",
  "category": "IT "  
},
{                
  "vendor_name": "Adventurous Llama",
  "image": "../images/llama.jpeg" ,
  "beacon_id": 12345,
  "web_url":" https://en.wikipedia.org/wiki/Llama",
  "description": "Llama adoption agency",
  "manager_id": 2,
  "event_id": "1234demo",
  "category":  "adoption"  
},
{                
  "vendor_name": "Travelers Paradise",
  "image": "../images/travelers.jpeg",
  "beacon_id": 123456,
  "web_url": "https://www.journeytoparadise.com/",
  "description": "Travel agency to Paradiseseeds.name",
  "manager_id": 3,
  "event_id": "1234demo",
  "category": "travel"
},{                
  "vendor_name": "Virtual Host",
  "image": "../images/virtualHost.png",
  "beacon_id": "1234",
  "web_url": "https://virtual-host.herokuapp.com/",
  "description": "",
  "manager_id": "",
  "event_id": "notDEMO",
  "category": ""
}];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " user records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
});

db.Event
  .remove({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.result.n + " event records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
});

db.Vendor
  .remove({})
  .then(() => db.Vendor.collection.insertMany(vendorSeed))
  .then(data => {
    console.log(data.result.n + " vendor records inserted!");
    process.exit(0);
  }).catch(err => {
    console.error(err);
    process.exit(1);
});
