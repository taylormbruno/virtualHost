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
      formObj: {
        vendor_name: "",
        image: "",
        web_url: "",
        description: "",
        namespace: "",
        instance: ""
      },
      hostID: "",
      event: {},
      returnedVendors: [],
      verifyImg: false
    };
  }
  componentDidMount = () => {
    let query = queryString.parse(window.location.search);
    console.log("event ID: " + this.props.event.obj);
    console.log("query: " + query.user);
    this.setState({
      ...this.state,
      hostID: query.user,
      event: this.props.event,
    });
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
      formObj: { ...this.state.formObj, [data.name]: data.value },
    });
    console.log(this.state);
  };

  saveVendor = async () => {
    let base64;
    if (
      this.state.formObj.namespace !== "" ||
      this.state.formObj.instance !== ""
    ) {
      const concatString =
        this.state.formObj.namespace + this.state.formObj.instance;
      var b = Buffer(concatString, "hex");
      base64 = await b.toString("base64");
      console.log(base64);
    }
    else {
      base64 = null
    }
    const submission = {
      vendor_name: this.state.formObj.vendor_name,
      image: this.state.formObj.image,
      beacon_id: base64,
      web_url: this.state.formObj.web_url,
      description: this.state.formObj.description,
      manager_id: this.state.hostID,
      event_id: this.state.event._id
    };
    console.log(submission);
    const newVendor = await API.createVendor(submission);
    console.log(newVendor.data);
    const vendor_array = this.state.returnedVendors;
    vendor_array.push(newVendor.data);
    console.log(vendor_array);
    this.setState({ ...this.state, returnedVendors: vendor_array });
    if (newVendor.data.beacon_id !== null) {
      this.registerBeacon(newVendor.data);
    }
  };

  registerBeacon = async (obj) => {
    console.log("registering beacon");
    console.log(obj)
    const newBeacon = await API.registerBeacon(obj);
    console.log(newBeacon);
  };

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
                      ? this.state.formObj.image
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
        <StyledButton onClick={() => {this.saveVendor()}}>Save Vendor</StyledButton>
      </StyledSegment>
    );
  }
}
