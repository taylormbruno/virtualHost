import axios from "axios";


export default {
  signupUser: function(userData) {
    return axios.post("/api/users/signup", userData);
  },
  loginUser: function(user) {
    return axios.get("/api/users/login", user);
  },
  getExternalUser: function() {
    return axios.get("/api/dash/getexternal");
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
  allEvents: function() {
    return axios.get("/api/events/all");
    
  },
  googleAuth: function() {
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Methods":
          "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        "Access-Control-Allow-Headers": "X-Requested-With,content-type",
        "Access-Control-Allow-Credentials": true
      },
      withCredentials: true,
      data: undefined
    };
    // console.log(params);
    return axios.get("/auth/google", params);
  }
};
