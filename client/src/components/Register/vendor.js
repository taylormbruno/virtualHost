import React, { Component } from "react";
import { StyledHeader2, StyledSegment, StyledButton } from "./styledComponents";
import { Form, Input, TextArea, Grid, Image } from "semantic-ui-react";
import queryString from "query-string";
import API from "../../utils/API";

const Buffer = require("buffer/").Buffer;

export class VendorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formObj: {},
      hostID: "",
      eventID: "",
      returnedVendors: [],
      beacon: false,
    };
  }
  componentDidMount = () => {
    let query = queryString.parse(window.location.search);
    console.log("event ID: " + this.props.eventID);
    console.log("query: " + query.user);
    // this.setState({ ...this.state, hostID: query.user, eventID: this.props.eventID });
  };

  handleInputChange = (event, data) => {
    const change = { [data.name]: data.value };
    console.log(change);
    let beacon = false;
    if (data.name === "namespace" || data.name === "instance") {
      beacon = true;
    }
    this.setState({
      ...this.state,
      formObj: { ...this.state.formObj, [data.name]: data.value },
      beacon: beacon,
    });
    console.log(this.state);
  };

  saveVendor = async () => {
    let base64;
    if (
      this.state.formObj.namespace !== undefined &&
      this.state.formObj.instance !== undefined
    ) {
      const concatString =
        this.state.formObj.namespace + this.state.formObj.instance;
      var b = Buffer(concatString, "hex");
      base64 = await b.toString("base64");
    }
    const submission = {
      vendor_name: this.state.formObj.vendor_name,
      image: this.state.eventFormObj.image,
      beacon_id: this.state.beacon ? base64 : null,
      web_url: this.state.formObj.web_url,
      description: this.state.formObj.description,
      manager_id: this.state.event.userID,
      event_id: this.state.eventID,
    };
    console.log(submission);
    const newVendor = await API.createVendor(submission);
    console.log(newVendor.data);
    const vendor_array = this.state.returnedVendors.push(newVendor.data);
    this.setState({ ...this.state, returnedVendors: vendor_array });
    if (newVendor.data.beacon_id !== null) {
      this.registerBeacon(newVendor.data);
    }
  };

  registerBeacon = async (obj) => {
    const newBeacon = await API.registerBeacon(obj);
    console.log(newBeacon);

  }

  render() {
    return (
      <StyledSegment>
        <StyledHeader2>Register Vendor</StyledHeader2>
        <Form>
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            label="Booth Name"
            placeholder="Enter name of your event here"
            onChange={this.handleInputChange}
            name="vendor_name"
          />
          <Form.Group widths="equal">
            <Form.Field
              id="form-input-control-first-name"
              control={Input}
              label="Beacon Namespace ID"
              placeholder="Enter name of your Beacon Namespace ID here"
              onChange={this.handleInputChange}
              name="namespace"
            />
            <Form.Field
              id="form-input-control-first-name"
              control={Input}
              label="Beacon Instance ID"
              placeholder="Enter name of your Beacon Instance ID here"
              onChange={this.handleInputChange}
              name="instance"
            />
          </Form.Group>
          <Form.Field
            id="form-input-control-error-email"
            control={Input}
            label="Photo URL"
            placeholder="Add the Image Address to your photo. This will display on your booth's card."
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
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Booth Description"
            placeholder="Tell us more about your booth"
            onChange={this.handleInputChange}
            name="description"
          />
          <Form.Field
            id="form-input-control-error-email"
            control={Input}
            label="Website URL"
            onChange={this.handleInputChange}
            name="web_url"
          />
        </Form>
        <StyledButton
          onClick={this.saveVendor()}
        >
          Save Vendor
        </StyledButton>
      </StyledSegment>
    );
  }
}
