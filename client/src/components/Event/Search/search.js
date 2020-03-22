import React, {Component} from "react";
import '../../../utils/API'


class Vendor extends Component{
    render() {
        let vendor = this.props.vendor
        return (
            <div>
                <h1>{this.props.vendors.length} Vendors</h1>
            </div>
        )
    }
}

class Filter extends Component {
    render() {
        return(
            <div className="Search"> 
                <form>
                    <div class="ui massive icon input className=searchBar">
                        <input  
                            name= "filterString"      
                            type="text"                             
                            placeholder="Search vendors..."/>
                            <i class="search icon"></i>
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
            seeds:Seeds,
            filterString:""
        }
    }
    componentDidMount(){        
        setTimeout(()=>{
            this.setState({filterString: ''});
        },2000);
    }
    handleInputChange = async (event) => {
        const { name, value } = event.target;
        this.setState({...this.state, [name]: value});
        let results = await API.searchVendor({vendor_name: this.state.filterString})
        console.log(results)
    };   

    vendorToRender = ()=>{ 
    const term = this.state.filterString;      
    const results= this.state.seeds
    .filter(vendor =>
      vendor.vendor_name.toLowerCase().includes(
        this.state.filterString.toLowerCase())
      ) 
    }

    render(){
        
        return(
            <div className = "SearchFilter">{
                    <div>
                        (this.state.seeds.vendors[] ? on_true : on_false)            
                                        
                            {this.state.seeds.vendors.vendor_name} {/*Do I want this to be {VendorCard} */}
                        
                            <Filter onTextChange= {this.handleInputChange
                            }/> 

                            {this.state.vendorResults.map(vendor =>
                            <Vendor vendor={vendor}/>
                            )} 
                    </div>   
                } 
            </div>        
        );       
    }
}

export default SearchFilter;