import React, { Component } from "react";
import { Grid, Segment, Card, Header } from "semantic-ui-react";
import "./style.css";
import EventCard from "../EventCards/eventCards";
import SearchFilter from "../Event/VendorSearch/vendorSearch";
import API from "../../utils/API";

class EventPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterList: [],
      eventData: []
      //   event_id: "1234demo" // props.eventID // pass event_id to props
    };
  }
  // const [eventData, setEventData] = useState([])
  // const [masterList, setMasterList] = useState([])

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

  // useEffect(() => {
  //     const fal = API.allEvents()
  //     console.log(fal)
  //     setEventData(fal) // this list the one that the map uses
  //     setMasterList(fal) // this list never changes
  // });
  theSearch = term => {
    const filtered = this.state.masterList.filter(word => {
      console.log(term, word.event_name);
      return word.event_name.toLowerCase().includes(term.toLowerCase());
    }); // this uses master list to be able to search all vendors
    // setEventData(filtered) // this gets replaced with filtered list
    this.setState({ ...this.state, eventData: filtered });
  };
  render() {
    return (
      <div>
        <Grid columns={2} divided stackable>
          <Grid.Row stretched>
            <Grid.Column floated="right" width={11}>
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
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default EventPage;
