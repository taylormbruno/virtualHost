import React, {Component} from "react";
import API from '../../../utils/API'
import VendorCard from '../VendorCards/vendorCard'
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
            filterString:"",
            eventID: "1234demo" // hardcoded for testing. needs to be grabbed from choosing event
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
        let results = API.searchVendor({filterString: this.state.filterString, eventID: this.state.eventID})
        console.log(results);
        this.setState({...this.state, results: results});
        this.render();
    };

    mapCards = () => {
        console.log("Mapping Cards\n------\n" + this.state.results);
        if (this.state.results !== []) {
            return this.state.results.map((vendor)=>{
                     <VendorCard vendor = {vendor} />
            });
        }
        else {
            API.allVendors({eventID: this.state.eventID })
            .then(resp => this.setState({...this.state, results: resp}))
            .catch(err => console.log(err));
            this.mapCards();
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