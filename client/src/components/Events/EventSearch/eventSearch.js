import React, {Component} from "react";
import API from '../../../utils/API'
import EventCard from '../../Events/eventCards'

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
class EventSearchFilter extends Component {
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
        let results = API.searchEvent({event_name: this.state.filterString})
        console.log(results)
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
                            <Filter onTextChange= {this.handleInputChange
                            }/>                            
                            {(this.state.active ? this.state.results.map((event)=>{
                            return <EventCard event = {event}/>
                            }): "" )}
                    </div>                 
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
                    {(this.state.active ? this.state.results.map((vendor)=>{return <EventCard vendor = {vendor}/>}): "" )}
                </div>                 
            </div>        
        );       
    }
}

export default EventSearchFilter;