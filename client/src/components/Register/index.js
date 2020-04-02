import React, { Component } from "react";
import { StyledHeader, StyledSegment, StyledButton } from "./styledComponents";
import options from "./options";
import API from "../../utils/API";
import queryString from "query-string";

import {
  Form,
  Input,
  TextArea,
  Select,
  Icon,
  Image,
  Grid
} from "semantic-ui-react";
import { VendorForm } from "./vendor";

class Settings extends Component {
  state = {
    event: {
      userID: "",
      active: false,
      obj: {}
    },
    vendors: [],
    verifyImg: false,
    eventFormObj: {}
  };

  componentDidMount = () => {
    let query = queryString.parse(window.location.search);
    this.setState({ ...this.state, event: {...this.state.event, userID: query.user} });
  };

  verifyImg = (event, data) => {
    event.preventDefault();
    this.setState({ ...this.state, verifyImg: true });
  };

  handleInputChange = (event, data) => {
    const change = { [data.name]: data.value };
    console.log(change);
    this.setState({
      ...this.state,
      eventFormObj: { ...this.state.eventFormObj, [data.name]: data.value }
    });
    console.log(this.state);
  };

  addEvent = async () => {
    const submission = {
      event_name: this.state.eventFormObj.event_name,
      image: this.state.eventFormObj.image,
      location: this.state.eventFormObj.location,
      start_time: new Date(`
        ${this.state.eventFormObj.year}/${this.state.eventFormObj.month}/${this.state.eventFormObj.day} ${this.state.eventFormObj.start_hour}:${this.state.eventFormObj.start_minute}:00
      `),
      end_time: new Date(`
      ${this.state.eventFormObj.year}/${this.state.eventFormObj.month}/${this.state.eventFormObj.day} ${this.state.eventFormObj.end_hour}:${this.state.eventFormObj.end_minute}:00
    `),
      description: this.state.eventFormObj.description,
      host_id: this.state.event.userID,
      web_url: this.state.eventFormObj.web_url
    };
    console.log(submission.start_time);
    const newEvent = await API.createEvent(submission);
    console.log(newEvent.data);
    this.setState({...this.state,event: {...this.state.event, active: true, obj: newEvent.data}});
  };

  addSection = () => {
    this.setState({
      vendors: [...this.state.vendors, <VendorForm />]
    });
  };

  scrollDown = () => {
    console.log("It is reading");
    var scrollingElement = document.scrollingElement || document.body;
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
  };

  render() {
    return (
      <div className="scrollingContainer">
        <StyledSegment>
          <StyledHeader>Register Your Event</StyledHeader>

          <Form>
            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                label="Event Title"
                placeholder="Enter name of your event here"
                name="event_name"
                onChange={this.handleInputChange}
              />
              <Form.Field
                id="form-input-control-last-name"
                control={Input}
                label="Event Location"
                placeholder="101 Main St., Example, US 55555"
                name="location"
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <strong>Event Date</strong>
            <Form.Group widths="equal">
              <Form.Field
                control={Select}
                options={options.month}
                placeholder="Select Month"
                name="month"
                search
                searchInput={{ id: "form-select-control-gender" }}
                onChange={this.handleInputChange}
              />
              <Form.Field
                control={Select}
                options={options.day}
                placeholder="Select Date"
                name="day"
                search
                searchInput={{ id: "form-select-control-gender" }}
                onChange={this.handleInputChange}
              />
              <Form.Field
                control={Select}
                options={options.year}
                placeholder="Select Year"
                name="year"
                search
                searchInput={{ id: "form-select-control-gender" }}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <strong>Starting Time</strong>
            <Form.Group widths="equal">
              <Form.Field
                control={Select}
                options={options.hour}
                placeholder="Hour"
                search
                searchInput={{ id: "form-select-control-gender" }}
                onChange={this.handleInputChange}
                name="start_hour"
              />
              <Form.Field
                control={Select}
                options={options.minute}
                placeholder="Minute"
                search
                searchInput={{ id: "form-select-control-gender" }}
                onChange={this.handleInputChange}
                name="start_minute"
              />
            </Form.Group>
            <strong>Ending Time</strong>
            <Form.Group widths="equal">
              <Form.Field
                control={Select}
                options={options.hour}
                placeholder="Hour"
                search
                searchInput={{ id: "form-select-control-gender" }}
                onChange={this.handleInputChange}
                name="end_hour"
              />
              <Form.Field
                control={Select}
                options={options.minute}
                placeholder="Minute"
                search
                searchInput={{ id: "form-select-control-gender" }}
                onChange={this.handleInputChange}
                name="end_minute"
              />
            </Form.Group>
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Event Description"
              placeholder="Tell us more about your event"
              onChange={this.handleInputChange}
              name="description"
            />
            <Form.Field
              id="form-input-control-error-email"
              control={Input}
              label="Photo URL"
              placeholder="Add the Image Address to your photo. This will display on your event's card."
              onChange={this.handleInputChange}
              name="image"
            />
            <Grid>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Image
                    src={
                      this.state.verifyImg
                        ? this.state.eventFormObj.image
                        : "https://www.sylvansport.com/wp/wp-content/uploads/2018/11/image-placeholder-1200x800.jpg"
                    }
                    size="small"
                    centered
                  />
                </Grid.Column>
                <Grid.Column width={8}>
                  <button style={this.verifyBtn} onClick={this.verifyImg}>
                    Verify Image
                  </button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Form.Field
              id="form-input-control-error-email"
              control={Input}
              label="Website URL"
              onChange={this.handleInputChange}
              name="web_url"
            />
          </Form>
          <StyledButton
            onClick={() => {
              this.addEvent();
              this.scrollDown();
            }}
          >
            <Icon name="save" />
            Save Event.
          </StyledButton>
        </StyledSegment>

        <div id="vendorSection">
          <>{this.state.vendors}</>
        </div>

        {this.state.event.active ? (
          <StyledButton
            onClick={() => {
              console.log(this.state.vendors);
              this.addSection();
              this.scrollDown();
            }}
          >
            <Icon name="add" />
            Add A Vendor
          </StyledButton>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default Settings;
