import React, {Component} from "react";
import API from '../../../utils/API'
import EventCard from '../../EventCards/eventCards'

class Filter extends Component {
    render() {
        return(
            <div className="Search"> 
                <form>
                    <div class="ui massive icon input className=searchBar">
                        <input id='searchBar'
                            name= "filterString"      
                            type="text"                             
                            placeholder="Search Events..."/>
                            <i class="search icon" id='searchIcon'></i>
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
    }
    handleInputChange =  (event) => {
        const { name, value } = event.target;
        this.setState({...this.state, [name]: value});
        let results = API.searchEvent({event_name: this.state.filterString})
        console.log(results)
    };   

    render(){        
        return(
            <div className = "SearchFilter">
                    <div>                                     
                            <Filter onTextChange= {this.handleInputChange
                            }/>                            
                            {(this.state.active ? this.state.results.map((vendor)=>{
                            return <EventCard vendor = {vendor}/>
                            }): "" )}
                    </div>                 
            </div>        
        );       
    }
}


export default EventSearchFilter;