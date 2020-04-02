
import React, { Component } from "react";
import { StyledHeader, StyledSegment, StyledButton } from "./styledComponents";
import { Form, Input, TextArea, Select, Icon } from "semantic-ui-react";
import { VendorForm } from "./vendor";

class Settings extends Component {
  state = {
    vendors: []
  };

  addSection = () => {
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

    const monthOptions = [
      { key: "1", text: "1", value: "01" },
      { key: "2", text: "2", value: "02" },
      { key: "3", text: "3", value: "03" },
      { key: "4", text: "4", value: "04" },
      { key: "5", text: "5", value: "05" },
      { key: "6", text: "6", value: "06" },
      { key: "7", text: "7", value: "07" },
      { key: "8", text: "8", value: "08" },
      { key: "9", text: "9", value: "09" },
      { key: "10", text: "10", value: "10" },
      { key: "11", text: "11", value: "11" },
      { key: "12", text: "12", value: "12" },
    ];

    const dateOptions = [
      { key: "1", text: "1", value: "01" },
      { key: "2", text: "2", value: "02" },
      { key: "3", text: "3", value: "03" },
      { key: "4", text: "4", value: "04" },
      { key: "5", text: "5", value: "05" },
      { key: "6", text: "6", value: "06" },
      { key: "7", text: "7", value: "07" },
      { key: "8", text: "8", value: "08" },
      { key: "9", text: "9", value: "09" },
      { key: "10", text: "10", value: "10" },
      { key: "11", text: "11", value: "11" },
      { key: "12", text: "12", value: "12" },
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
      { key: "24", text: "24", value: "24" },
      { key: "25", text: "25", value: "25" },
      { key: "26", text: "26", value: "26" },
      { key: "27", text: "27", value: "27" },
      { key: "28", text: "28", value: "28" },
      { key: "29", text: "29", value: "29" },
      { key: "30", text: "30", value: "30" },
      { key: "31", text: "31", value: "31" }
    ];

    const yearOptions = [
      { key: "2020", text: "2020", value: "2020" },
      { key: "2021", text: "2021", value: "2021" },
      { key: "2022", text: "2022", value: "2022" },
      { key: "2023", text: "2023", value: "2023" },
      { key: "2024", text: "2024", value: "2024" },
      { key: "2025", text: "2025", value: "2025" },
      { key: "2026", text: "2026", value: "2026" },
      { key: "2027", text: "2027", value: "2027" },
      { key: "2028", text: "2028", value: "2028" },
      { key: "2029", text: "2029", value: "2029" },
      { key: "2030", text: "2030", value: "2030" }
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
            <strong>Event Date</strong>
            <Form.Group widths="equal">
              <Form.Field
                control={Select}
                options={monthOptions}
                placeholder="Select Month"
                name="month"
                search
                searchInput={{ id: "form-select-control-gender" }}
              />
              <Form.Field
                control={Select}
                options={dateOptions}
                placeholder="Select Date"
                name="date"
                search
                searchInput={{ id: "form-select-control-gender" }}
              />
              <Form.Field
                control={Select}
                options={yearOptions}
                placeholder="Select Year"
                name="year"
                search
                searchInput={{ id: "form-select-control-gender" }}
              />
            </Form.Group>
            <strong>Starting Time</strong>
            <Form.Group widths="equal">
              <Form.Field
                control={Select}
                options={hourOptions}
                placeholder="Hour"
                search
                searchInput={{ id: "form-select-control-gender" }}
              />
              <Form.Field
                control={Select}
                options={minuteOptions}
                placeholder="Minute"
                search
                searchInput={{ id: "form-select-control-gender" }}
              />
            </Form.Group>
            <strong>Ending Time</strong>
            <Form.Group widths="equal">
              <Form.Field
                control={Select}
                options={hourOptions}
                placeholder="Hour"
                search
                searchInput={{ id: "form-select-control-gender" }}
              />
              <Form.Field
                control={Select}
                options={minuteOptions}
                placeholder="Minute"
                search
                searchInput={{ id: "form-select-control-gender" }}
              />
            </Form.Group>
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Event Description"
              placeholder="Tell us more about your event"
            />
            <Form.Field
            id="form-input-control-error-email"
            control={Input}
            label="Photo URL"
            placeholder="Add URL path to photo. This will display on your booth's card."
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
