import axios from "axios";

export default {
    signupUser: function(userData) {
        return axios.post("/api/users/signup", userData);
    },
    searchVendor: function(term) {
        return axios.get("/api/vendors/search", term);
    },
    allVendors: function(eventID) {
        return axios.get("/api/vendors/all", eventID);
    },
    googleAuth: function() {
        const params = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",    
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
                "Access-Control-Allow-Headers": "X-Requested-With,content-type",    
                "Access-Control-Allow-Credentials": true,
            },
            withCredentials: true,
            data: undefined
        }
        return axios('/auth/google', params) ;
    }
}