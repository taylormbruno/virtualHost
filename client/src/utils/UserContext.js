import React from "react";

const UserContext = React.createContext({
    loggedIn: false,
    fname: "Kacie",
    lname: "Hatley"
});

export default UserContext;
