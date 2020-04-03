import React, { Component } from "react";
import { Grid, Segment, Card, Header } from "semantic-ui-react";
import "./style.css";
import EventCard from "../EventCards/eventCards";
import SearchFilter from "../Event/VendorSearch/vendorSearch";
import API from "../../utils/API";
import { StyledGrid } from "./styledComponents";

class EventPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterList: [],
      eventData: []      
    };
  }
  
  componentDidMount() {
    this.retrieveAll().then(response => {
      console.log(response);
      this.setState({
        ...this.state,
        masterList: response,
        eventData: response
      });
    });
  }

  retrieveAll = async () => {
    const master = await API.allEvents();
    console.log(master.data);
    return master.data;
  };
  
  theSearch = term => {
    const filtered = this.state.masterList.filter(word => {
      console.log(term, word.event_name);
      return word.event_name.toLowerCase().includes(term.toLowerCase());
    }); 
    this.setState({ ...this.state, eventData: filtered });
  };
  render() {
    return (
      <div>
        <Grid columns={2} stackable>
          <Grid.Row stretched>
            <StyledGrid width={14}>
              <Segment id="column2">
                <Header id="vendorHeader">Events</Header>
                <SearchFilter theSearch={this.theSearch} />
                <div>
                    <Card.Group centered grid container columns={3} stackable>
                      {this.state.eventData !== []
                        ? this.state.eventData.map(event => {
                            console.log(event);
                            return <EventCard event={event} />;
                          })
                        : ""}
                    </Card.Group>
                </div>
              </Segment>
            </StyledGrid>
          </Grid.Row>
        </Grid>       
      </div>
    );
  }
}
export default EventPage;
