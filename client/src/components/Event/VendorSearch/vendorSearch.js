import React, {Component} from "react";
import API from '../../../utils/API'
import VendorCard from '../../VendorCard/vendorCard'
import { StyledForm } from '../styledComponents'


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
    componentDidMount= () => {     
        // let results = API.retrieveAllVendors({ eventID: this.state.eventID }); 
        // setTimeout(()=>{
        //     this.setState({filterString: ""});
        // },2000);
        console.log("Component Did Mount");
    }
    handleInputChange = (event) => {
        event.preventDefault();
        console.log("Changing Input: " + event.target.value);
        const { name, value } = event.target;
        this.setState({...this.state, [name]: value});
        this.renderCards();
    };   

    renderCards = () => {
        //let results = API.searchVendor({filterString: this.state.filterString, eventID: this.state.eventID})
        let results = API.searchVendor(this.state.SearchFilter);
        console.log(results);
        this.setState({...this.state, results: results});
    };

    mapCards = () => {
        console.log("Mapping Cards\n------\n" + this.state.results);
        if (this.state.results !== []) {
          this.state.results.map((vendor)=>{
                     return <VendorCard vendor = {vendor} />
            });
        }
        else {
            API.allVendors({eventID: this.state.eventID })
            .then(resp => {
                this.setState({...this.state, results: resp});
                this.state.results.map((vendor)=>{
                    return <VendorCard vendor = {vendor} />
           });
            })
            .catch(err => console.log(err));
        }
    }

    render(){        
        return(
            <div>                                     
                <div className="Search"> 
                    <StyledForm>
                        <div className="ui massive icon input searchBar">
                            <input  
                                name= "filterString"      
                                type="text"                             
                                placeholder="Search vendors..."
                                onChange={this.handleInputChange}
                            />
                            <i className="search icon" id='searchIcon'></i>
                        </div>
                    </StyledForm> 
                    {this.mapCards}
                </div>                 
            </div>        
        );       
    }
}

export default SearchFilter;