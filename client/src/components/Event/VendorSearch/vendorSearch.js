import React, {Component} from "react";
import API from '../../../utils/API'
import VendorCard from '../VendorCards/vendorCard'


// class Filter extends Component {
//     render() {
//         return(
//             <div className="Search"> 
//                 <form>
//                     <div class="ui massive icon input className=searchBar">
//                         <input  
//                             name= "filterString"      
//                             type="text"                             
//                             placeholder="Search vendors..."/>
//                             <i class="search icon"></i>
//                     </div>
//                 </form> 
//             </div>
//         );
//     }
// }

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
    handleInputChange =  (event) => {
        const { name, value } = event.target;
        this.setState({...this.state, [name]: value});
        let results = API.searchVendor({vendor_name: this.state.filterString})
        console.log(results)
    };   

    render(){        
        return(
            <div className = "SearchFilter">
                    <div>                                     
                    <div className="Search"> 
                        <form>
                            <div class="ui massive icon input className=searchBar">
                                <input  
                                    name= "filterString"      
                                    type="text"                             
                                    placeholder="Search vendors..."
                                    onChange={this.handleInputChange}
                                />
                                    <i class="search icon"></i>
                                </div>
                            </form> 
                        </div>                      
                        {(this.state.active ? this.state.results.map((vendor)=>{
                            return <VendorCard vendor = {vendor}/>
                        }): "" )}
                    </div>                 
            </div>        
        );       
    }
}

export default SearchFilter;