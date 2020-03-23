import React, {Component} from "react";
import API from '../../../utils/API'
import VendorCard from '../EventCards/VendorCards/vendorCard'


class Filter extends Component {
    render() {
        return(
            <div className="Search"> 
                <form>
                    <div className="ui massive icon input className=searchBar">
                        <input  
                            name= "filterString"      
                            type="text"                             
                            placeholder="Search vendors..."/>
                            <i className="search icon"></i>
                    </div>
                </form> 
            </div>
        );
    }
}

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
    }
    handleInputChange =  async (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({...this.state, [name]: value});
        const results = await API.searchVendor({filterString: this.state.filterString});
        this.setState({...this.state, results: results});
    };   

    render(){        
        return(
            <div className = "SearchFilter">
                    <div>                                     
                            <Filter onTextChange= {this.handleInputChange
                            }/>                            
                            {(this.state.active ? this.state.results.map((vendor)=>{
                            return <VendorCard vendor = {vendor}/>
                            }): "" )}
                    </div>                 
            </div>        
        );       
    }
}

export default SearchFilter;