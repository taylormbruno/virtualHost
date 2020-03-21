import React, {Component} from "react";
import Seeds from "./seeds";

function searchingFor(term){
    return function(x){
        return x.first.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}
class SearchFilter extends Component{
    constructor(props){
        super(props);
            this.state = {
                Seeds: Seeds,
                term:"",
            }
            this.searchHandler = this.searchHandler.bind(this);
    }
    searchHandler(event){
        this.setState({term: event.target.value})
    }

    render() {
        const {term, Seeds} = this.state;
        return(
            <div className="Search"> 
                <form>
                    <div class="ui massive icon input className=searchBar">
                        <input         
                            type="text" 
                            placeholder="Search vendors..."
                            value={term}
                            onChange={this.searchHandler}/>
                        {/* <i class="search icon"></i> */}
                    </div>
                </form>
                {
                    Seeds.filter(searchingFor(term)).map(vendor =>
                        <ul>
                            <div key= {vendor.id}>
                                <li>{vendor.vendor_name}</li>
                                <li>{vendor.image}</li>
                                <li>{vendor.beacon_id}</li>
                                <li>{vendor.web_url}</li>
                                <li>{vendor.description}</li>
                                <li>{vendor.manager_id}</li>
                                <li>{vendor.category}</li>
                            </div>
                        </ul>
                    )
                }
            </div>
        );
    }
}      

export default SearchFilter;