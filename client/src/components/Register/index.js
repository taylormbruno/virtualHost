import React, { Component } from "react";
import { StyledHeader, StyledSegment, StyledButton } from "./styledComponents";
import { Form, Input, TextArea, Select, Icon, Header } from "semantic-ui-react";
import { VendorForm } from "./vendor";

class Settings extends Component {
  state = {
    vendors: []
  };

  addSection = () => {
    // let vendorSection = document.getElementById("vendorSection");
    // let content = document.createElement('div'); // is a node
    // content.innerHTML = Example;
    // vendorSection.appendChild(content);
    // this.state.vendors.push(<div>{"Hello"}</div>)

    this.setState({
      vendors: [...this.state.vendors, <VendorForm />]
    });
  };

  scrollDown = () => {
  console.log("It is reading");
  var scrollingElement = (document.scrollingElement || document.body);
  scrollingElement.scrollTop = scrollingElement.scrollHeight;
  }

  render() {
    const hourOptions = [
      { key: "0", text: "0", value: "0" },
      { key: "1", text: "1", value: "1" },
      { key: "2", text: "2", value: "2" },
      { key: "3", text: "3", value: "3" },
      { key: "4", text: "4", value: "4" },
      { key: "5", text: "5", value: "5" },
      { key: "6", text: "6", value: "6" },
      { key: "7", text: "7", value: "7" },
      { key: "8", text: "8", value: "8" },
      { key: "9", text: "9", value: "9" },
      { key: "10", text: "10", value: "10" },
      { key: "11", text: "11", value: "11" },
      { key: "12", text: "12", value: "12" },
      { key: "13", text: "13", value: "13" },
      { key: "14", text: "14", value: "14" },
      { key: "15", text: "15", value: "15" },
      { key: "16", text: "16", value: "16" },
      { key: "17", text: "17", value: "17" },
      { key: "18", text: "18", value: "18" },
      { key: "19", text: "19", value: "19" },
      { key: "20", text: "20", value: "20" },
      { key: "21", text: "21", value: "21" },
      { key: "22", text: "22", value: "22" },
      { key: "23", text: "23", value: "23" },
      { key: "24", text: "24", value: "24" }
    ];

    const minuteOptions = [
      { key: "00", text: "00", value: "00" },
      { key: "15", text: "15", value: "15" },
      { key: "30", text: "30", value: "30" },
      { key: "45", text: "45", value: "45" }
    ];

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
              />
              <Form.Field
                id="form-input-control-last-name"
                control={Input}
                label="Event Location"
                placeholder="101 Main St., Example, US 55555"
              />
            </Form.Group>
            <strong>Starting Time</strong>
            <Form.Group widths="equal">
              <Form.Field
                control={Select}
                options={hourOptions}
                placeholder="Starting Time"
                search
                searchInput={{ id: "form-select-control-gender" }}
              />
              <Form.Field
                control={Select}
                options={minuteOptions}
                placeholder="Ending Time"
                search
                searchInput={{ id: "form-select-control-gender" }}
              />
            </Form.Group>
            <strong>Ending Time</strong>
            <Form.Group widths="equal">
              <Form.Field
                control={Select}
                options={hourOptions}
                placeholder="Starting Time"
                search
                searchInput={{ id: "form-select-control-gender" }}
              />
              <Form.Field
                control={Select}
                options={minuteOptions}
                placeholder="Ending Time"
                search
                searchInput={{ id: "form-select-control-gender" }}
              />
            </Form.Group>
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Event Description"
              placeholder="Opinion"
            />
            <Form.Field
              id="form-input-control-error-email"
              control={Input}
              label="Website URL"
            />
          </Form>
        </StyledSegment>

        <div id="vendorSection">
          <>{this.state.vendors}</>
        </div>

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
            <StyledButton
              onClick={() => {
                console.log(this.state.vendors);
                this.addSection();
                this.scrollDown();
              }}
            >
              <Icon name="save" />
              Save Event and Vendors
            </StyledButton>
      </div>
    );
  }
}
export default Settings;
