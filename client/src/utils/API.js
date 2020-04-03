import axios from "axios";

export default {
  signupUser: function(userData) {
    return axios.post("/api/users/signup", userData);
  },
  loginUser: function(user) {
    return axios.post("/api/users/login", user);
  },
  getDashboard: function(id) {
    return axios.get("/api/dash/loaddashboard", id);
  },
  searchVendor: function(term) {
    return axios.get("/api/vendors/search", term);
  },
  allVendors: function() {
    console.log("test");
    return axios.get("/api/vendors/all")    
  },
  findVendor: function(id) {
    console.log("test");
    return axios.get("/api/vendors/vendor", id)
  },
  allEvents: function() {
    return axios.get("/api/events/all");
  },
  allEventsByUser: function(id) {
    return axios.get("/api/events/byuser/" + id, id);
  },
  findVendorByHost: function() {
    return axios.get("/api/vendors/byhost");
  },
  findUserById: function(id) {
    console.log("test");
    return axios.get("/api/users/findbyid/" + id, id)
  },  
  createEvent: function(obj) {
    return axios.post("/api/events/create", obj);
  },
  createVendor: function(obj) {
    return axios.post("/api/vendors/create", obj);
  },
  validSignup: function(term) {
    return axios.post("/api/users/validate", term)
  },  
  findEventByID: function(term) {
    console.log("testeventbyid")
    return axios.get("/api/events/find/" + term , term)
  }
};
