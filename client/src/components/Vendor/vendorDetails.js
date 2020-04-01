import React, { Component } from "react";
import "./style.css";
import {
  Container,
  Grid,
  Card,
  Segment,
  Header,
  Image,
  Divider
} from "semantic-ui-react";
import API from "../../utils/API";
import queryString from "query-string";
import { StyledContainer } from "./styledComponents";

class VendorDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vendorList: [],
      vendorData: [],
      vendor_id: ""
    };
  }

  componentDidMount() {
    var query = queryString.parse(window.location.search);

    console.log("QUERY\n", query.q);
    this.setState({
      ...this.state,
      vendor_id: query.q
    });

    this.retrieveAll().then(response => {
      console.log(response);
      this.setState({
        ...this.state,

        vendorData: response
      });
      console.log(this.state);
    });
  }

  retrieveAll = async () => {
    const master = await API.findVendor(this.state.vendor_id);
    console.log("MASTER DATA\n", master.data);
    return master.data;
  };
  render() {
    return (
        <StyledContainer id="bodyContainer">
          <Segment centered stackable>
            <Header id="vendorHeader">Vendor</Header>
            <Divider />
            <Card centered href={"/vendor/?q=" + this.state.vendorData._id}>
                <Card.Content>
                  <Image src={this.state.vendorData.image} wrapped ui={true} />
                  <Card.Header>{this.state.vendorData.vendor_name}</Card.Header>
                  <Card.Description>
                    {this.state.vendorData.description}
                    <br />
                  </Card.Description>
                </Card.Content>
                <br />
                <br />
                <a
                  href={this.state.vendorData.web_url}
                  target="_blank"
                  rel="alternate noopener noreferrer"
                >
                  Website
                </a>
                <br />
                <br />
            </Card>
          </Segment>
        </StyledContainer>
    );
  }
}
export default VendorDetail;
