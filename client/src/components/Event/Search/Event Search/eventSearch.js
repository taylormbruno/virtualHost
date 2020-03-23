import React, {Component} from "react";
import API from '../../../../utils/API'
import VendorCard from '../EventCards/VendorCards/vendorCard'


class SearchFilter extends Component {
    constructor(){
        super();
        this.state ={
            results:[],
            filterString:""
        }
    }
    componentDidMount(){        
        setTimeout(()=>{
            this.setState({filterString: ''});
        },2000);
    };
    handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        console.log("SEARCHING FOR " + event.target);
        this.setState({...this.state, [name]: value});
        
    };   
    handleSubmit = (event) => {
        event.preventDefault();
        const results = API.searchVendor({filterString: this.state.filterString});
        this.setState({...this.state, results: results});
    }


    render(){        
        return(
            <div className = "SearchFilter">
                <div>   
                    <div className="Search"> 
                        <form>
                            <div className="ui massive icon input searchBar">
                                <input  
                                    name= "filterString"      
                                    type="text"                             
                                    placeholder="Search vendors..."
                                    onChange={this.handleInputChange}
                                    onSubmit={this.handleSubmit}
                                />
                                <i className="search icon"></i>
                            </div>
                        </form> 
                    </div>                                  
                    {(this.state.active ? this.state.results.map((vendor)=>{return <VendorCard vendor = {vendor}/>}): "" )}
                </div>                 
            </div>        
        );       
    }
}

export default SearchFilter;