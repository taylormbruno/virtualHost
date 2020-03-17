import axios from "axios";

export default {
    signupUser: function(userData) {
        console.log(userData); // fires
        return axios.post("/api/users/signup", userData);
    }
}