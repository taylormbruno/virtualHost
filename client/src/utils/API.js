import axios from "axios";

export default {
    signupUser: function(userData) {
        return axios.post("/api/users/signup", userData);
    }
}