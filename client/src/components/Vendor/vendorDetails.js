import React, { Component } from "react";
import "./style.css";
import {
  Form,
  Rating,
  Icon,
  Segment,
  Header,
  Image,
  Divider
} from "semantic-ui-react";
import API from "../../utils/API";
import queryString from "query-string";
import {
  StyledContainer,
  StyledButton,
  StyledHeader2  
} from "./styledComponents";

class VendorDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vendorList: [],
      vendorData: [],
      vendor_id: "",
    };
  }

  componentDidMount() {
    var query = queryString.parse(window.location.search);
    this.setState({
      ...this.state,
      vendor_id: query.q
    });

    this.retrieveAll().then(response => {
      this.setState({
        ...this.state,

        vendorData: response
      });
    });
  }

  retrieveAll = async () => {
    const master = await API.findVendor(this.state.vendor_id);
    return master.data;
  };

  addFavs = async () => {
    document.getElementById("favoritesAlert").style.display="inline-block";
    document.getElementById("star").style.display="none";
    
    const addFavs = await API.addFavs({
      filter: { _id: this.props.userState.userID },
      vendorID: this.state.vendor_id,
      vendorName: this.state.vendorData.vendor_name
    })
  };

  addNote = async () => {
    document.getElementById("noteAlert").style.display="inline-block";
    document.getElementById("noteForm").style.display="none";
    const newNote = await API.createNote({
      _id: this.props.userState.userID,
      vendor_id: this.state.vendor_id,
      event_id: this.state.vendorData.event_id,
      // event_name: this.state.vendorData,
      vendor_name: this.state.vendorData.vendor_name,
      note: document.getElementById("formWidth").value
    });
  };
  
  render() {
    return (
      <StyledContainer id="bodyContainer">
        <Segment centered stackable>
          <Header id="vendorHeader">Vendor</Header>
          <Divider />
          <div centered href={"/vendor/?q=" + this.state.vendorData._id}>
            <div id="smallPicture">
              <Image src={this.state.vendorData.image} wrapped ui={true} />
            </div>
            <StyledHeader2>{this.state.vendorData.vendor_name}</StyledHeader2>
            <p>
              {this.state.vendorData.description}
              <br />
            </p>
            <a
              href={this.state.vendorData.web_url}
              target="_blank"
              rel="alternate noopener noreferrer"
            >
              Website
            </a>
            <br />
            <div id="noteForm">
            <Form>
              <Form.TextArea
                id="formWidth"
                placeholder="Take a note..."
              />
            </Form>
            <StyledButton onClick={this.addNote}>
              <Icon name="save" />
              Save Note
            </StyledButton>
            </div>
            <p id="noteAlert">Note Saved!</p>
            <br />
            <p id="favoritesAlert">Added To Your Favorites</p>
            <Rating size="huge" onClick={this.addFavs} id="star" />
          </div>
        </Segment>
      </StyledContainer>
    );
  }
}
export default VendorDetail;
