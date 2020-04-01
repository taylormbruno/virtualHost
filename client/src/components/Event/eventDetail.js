import React, { Component } from "react";
import { Grid, Segment, Divider, Card, Header } from "semantic-ui-react";
import "./style.css";
import VendorCard from "../VendorCard/vendorCard";
import SearchFilter from "./VendorSearch/vendorSearch";
import API from "../../utils/API";
import EventCard from "../EventCards/eventCards";
import queryString from "query-string";

class EventDetail extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      masterList: [],
      eventList: [],
      vendorData: [],
      event_id: "" 
    };
  }

  
  componentDidMount() {
    var query = queryString.parse(window.location.search);
    
    console.log("QUERY\n", query.q);
    this.setState({
      ...this.state,
      event_id: query.q
    });

    this.retrieveAll().then(response => {
        console.log(response);
      this.setState({
        ...this.state,
        masterList: response,
        vendorData: response
      });
    });

    this.retrieveAllEvents().then(response => {
        console.log(response);
      this.setState({
        ...this.state,
        eventList: response        
      });
    });
  }

  retrieveAll = async () => {
    const master = await API.allVendors(this.state.event_id);
    console.log("MASTER DATA\n", master.data);
    return master.data;
  };

  retrieveAllEvents = async () => {
    const master = await API.allEvents();
    console.log("EVENT DATA\n", master.data);
    return master.data;
  };

  theSearch = term => {
    const filtered = this.state.masterList.filter(word => {
      console.log(term, word.vendor_name);
      return word.vendor_name.toLowerCase().includes(term.toLowerCase());
    }); 
    this.setState({
      ...this.state,
      vendorData: filtered
    });
  };
  render() {
    return (
      <div>
        <Grid columns={2}  divided stackable>
          <Grid.Row stretched>
            <Grid.Column floated="left" width={7}>
              <Segment id="column1">
                <Header id="eventHeader">Event</Header>
                <Divider/>
                <div id="eventCard" >
                  <Card.Group centered container style={{ "textAlign": "center" }}>
                    {this.state.eventList !== []
                        ? this.state.eventList.map(event => {
                            console.log(event);
                            return <EventCard event={event} key={event._id}/>;
                          })
                        : ""}
                  </Card.Group>                  
                </div>
              </Segment>
            </Grid.Column>

            <Grid.Column floated="right" width={9}>
              <Segment id="column2">
                <Header id="vendorHeader"> Participating Vendors</Header>
                <SearchFilter theSearch={this.theSearch} />
                <div>
                  <Card.Group centered container columns={3} stackable>
                    {this.state.vendorData !== []
                      ? this.state.vendorData.map(vendor => {
                          return <VendorCard vendor={vendor} key={vendor._id} />;
                        })
                      : ""}
                  </Card.Group>
                </div>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default EventDetail;

