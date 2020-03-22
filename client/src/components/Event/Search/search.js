import React, {Component} from "react";
import Seeds from "./seeds";

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
                            type="text" onkeyup={(event)=> 
                             this.props.onTextChange(event.target.value)}
                            placeholder="Search vendors..."
                            // value={value}
                            onKeyUp={event =>
                            this.props.onTextChange(event.target.value)}/>
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
            Seeds:{},
            filterString:""
        }
    }
    componentDidMount(){        
        setTimeout(()=>{
            this.setState({filterString: ''});
        },2000);
    }

    render(){
        let vendorToRender = this.state.seeds.vendors.vendor_name ? this.state.seeds.vendors.vendor_name
      .filter(vendor =>
        vendor.vendor_name.toLowerCase().includes(
          this.state.filterString.toLowerCase())
        ) : []
        return(
            <div className = "SearchFilter">{
                <div>
                    (this.state.seeds.vendors ? on_true : on_false)            
                                    
                        {this.state.seeds.vendors.vendor_name} {/*Do I want this to be {VendorCard} */}
                    
                        <Filter onTextChange= {text => {
                        console.log(text);
                        this.setState({filterString: text})
                        }}/> 

                        {vendorToRender.map(vendor =>
                        <Vendor vendor={vendor}/>
                        )} 
                </div>   
            } 
            </div>        
        );       
    }
}

export default SearchFilter;