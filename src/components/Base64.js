import React, { Component } from "react";
var Buffer = require('buffer/').Buffer;

class Base64 extends Component {
    state = {
        base64: "",
        style: {
            overflowWrap: "break-word"
        }
    }

    handleBaseChange =  async () => {
        const namespace = "2F234454F4911BA9FFA6" ;
        const instance = "000000000003";
        const concatString = namespace + instance;
        console.log(namespace, "\n", instance, "\n", concatString);

        var b = Buffer(concatString, "hex");
        // b.length > 16 bytes    // The 32 char string above represents 16 bytes!
        // b.toString("base64") > '7dHr+sBOXe+gF+Yb3Vwqmg=='
        const encodedString = await b.toString("base64");
        // encodedString.length > 24
        this.setState({ ...this.state, base64: encodedString });
        console.log(encodedString);
    }
    
    render() {
        return (
            <div onClick={this.handleBaseChange}>
                <h1 style={this.state.style} >Base64 Result = {this.state.base64}</h1>
            </div>
        );
    } 
}

export default Base64;