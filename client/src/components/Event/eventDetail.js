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
      event: {},
      vendorData: [],
      event_id: ""
    };
  }

  componentDidMount() {
    var query = queryString.parse(window.location.search);   
    this.setState({
      ...this.state,
      event_id: query.q
    });

    this.retrieveAll().then(response => {      
      this.setState({
        ...this.state,
        masterList: response,
        vendorData: response
      });
    });

    this.retrieveAllEvents(query.q).then(response => {    

    });
  }

  retrieveAll = async () => {
    const master = await API.allVendors(this.state.event_id);    
    return master.data;
  };

  retrieveAllEvents = async (query) => {
    const master = await API.findEventByID(query);    
    this.setState({
      ...this.state,
      event: master.data
    });
    return master.data;
  };

  theSearch = term => {
    const filtered = this.state.masterList.filter(word => {      
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
        <Grid floated="left" columns={3} divided stackable>
          <Grid.Row stretched>
            <Grid.Column floated="left" width={7}>
              <Segment id="column1">
                <Header id="eventHeader">Event</Header>
                <Divider />
                <div id="eventCard" >
                  <Card.Group centered container columns={3} stackable>
                    <EventCard event={this.state.event} key={this.state.event._id} />
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

