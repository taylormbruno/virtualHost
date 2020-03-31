import axios from "axios";

export default {
  signupUser: function(userData) {
    return axios.post("/api/users/signup", userData);
  },
  loginUser: function(user) {
    return axios.get("/api/users/login", user);
  },
  getExternalUser: function(condition) {
    return axios.get("/api/dash/getexternal", condition);
  },
  createExternalUser: function() {
    return axios.get("/api/dash/createexternal");
  },
  getDashboard: function(id) {
    return axios.get("/api/dash/loaddashboard", id);
  },
  searchVendor: function(term) {
    return axios.get("/api/vendors/search", term);
  },
  allVendors: function() {
    console.log("test");
    return axios.get("/api/vendors/all");
  },
  allEvents: function() {
    return axios.get("/api/events/all");
  }
};
