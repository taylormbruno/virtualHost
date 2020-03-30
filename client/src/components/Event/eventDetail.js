import React, { Component } from "react";
import { Grid, Segment, Container, Card, Header } from "semantic-ui-react";
import "./style.css";
import VendorCard from "../VendorCard/vendorCard";
import SearchFilter from "./VendorSearch/vendorSearch";
import API from "../../utils/API";
import EventCard from "../EventCards/eventCards";
import queryString from "query-string";

class EventDetail extends Component {
  constructor(props) {
    super(props);
    // this.routeParam = props.match.params.id;
    this.state = {
      masterList: [],
      vendorData: [],
      event_id: "" // figure out how to pass id from params
    };
  }

  componentDidMount() {
    var query = queryString.parse(window.location.search);
    // if (query.token) {
    //   window.localStorage.setItem("jwt", query.token);
    // }
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
  }

  retrieveAll = async () => {
    const master = await API.allVendors(this.state.event_id);
    console.log("MASTER DATA\n", master.data);
    return master.data;
  };

  theSearch = term => {
    const filtered = this.state.masterList.filter(word => {
      console.log(term, word.vendor_name);
      return word.vendor_name.toLowerCase().includes(term.toLowerCase());
    }); // this uses master list to be able to search all vendors
    this.setState({
      ...this.state,
      vendorData: filtered
    }); // vendorData gets replaced with filtered list
  };
  render() {
    return (
      <div>
        <Grid columns={2} divided stackable>
          <Grid.Row stretched>
            <Grid.Column floated="left" width={5}>
              <Segment id="column1">
                <Header id="eventHeader">Event</Header>
                <div>
                  <Container style={{ "text-align": "center" }}>
                    <EventCard />
                  </Container>
                </div>
              </Segment>
            </Grid.Column>

            <Grid.Column floated="right" width={11}>
              <Segment id="column2">
                <Header id="vendorHeader">Vendors</Header>
                <SearchFilter theSearch={this.theSearch} />
                <div>
                  <Card.Group centered grid container columns={3} stackable>
                    {this.state.vendorData !== []
                      ? this.state.vendorData.map(vendor => {
                          return <VendorCard vendor={vendor} />;
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
