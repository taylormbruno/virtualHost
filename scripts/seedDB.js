const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/virtualhost"
);

const userSeed = [
  {
    first_name: "Taylor",
    last_name: "Bruno",
    username: "taylorbruno",
    password: "12345678",
    email: "taylorbruno895@gmail.com"
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
  vendor_name: "Virtual Host",
  image: "../images/virtualHost.png",
  beacon_id: "1234",
  web_url: "https://virtual-host.herokuapp.com/",
  description: "",
  manager_id: "",
  category: ""
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
  .then(() => db.Event.collection.insertMany(userSeed))
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
