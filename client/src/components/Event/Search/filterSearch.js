import React, {Component} from "react";
import Seeds from "./seeds";

class FilterSearch extends {
    constructor(){
        super();
        this.state = {
            search:""
        };
    }

    render() {
        return9
        <div>
            <ul>
                {this.props.Seeds.map((contact)=> {
                    return <Seeds seeds={seeds}
                    key=
                    {seeds.vendor_name}
                    {seeds.image}
                    {seeds.web_url}
                    {seeds.description}
                    />
                })}
            </ul>
    }
}