import React, { Component } from "react";
import { StyledHeader2, StyledSegment } from "./styledComponents";
import {
  Form,
  Input,
  TextArea
} from "semantic-ui-react";

export class VendorForm extends Component {
  render() {
    return (
      <StyledSegment>
        <StyledHeader2>Register Vendor</StyledHeader2>
        <Form>
        <Form.Field
              id="form-input-control-first-name"
              control={Input}
              label="Event Title"
              placeholder="Enter name of your event here"
            />
          <Form.Group widths="equal">
            <Form.Field
              id="form-input-control-first-name"
              control={Input}
              label="Beacon Form ID"
              placeholder="Enter name of your Beacon Form ID here"
            />
            <Form.Field
              id="form-input-control-first-name"
              control={Input}
              label="Beacon Instance ID"
              placeholder="Enter name of your Beacon Instance ID here"
            />
          </Form.Group>
          <Form.Field
            id="form-input-control-error-email"
            control={Input}
            label="Photo URL"
            placeholder="Add URL path to photo. This will display on your booth's card."
          />
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Booth Description"
            placeholder="Tell us more about your booth"
          />
          <Form.Field
            id="form-input-control-error-email"
            control={Input}
            label="Website URL"
          />
        </Form>
      </StyledSegment>
    );
  }
}

// class VendorSection extends Component {
//   render() {
//     return(
//         <div>
//         <StyledSegment>
//             <StyledHeader>
//                 Register Your Event
//             </StyledHeader>

//             <Form>
//     <Form.Group widths='equal'>
//       <Form.Field
//         id='form-input-control-first-name'
//         control={Input}
//         label='Event Title'
//         placeholder='Enter name of your event here'
//       />
//       <Form.Field
//         id='form-input-control-last-name'
//         control={Input}
//         label='Event Location'
//         placeholder='101 Main St., Example, US 55555'
//       />
//     </Form.Group>
//     <Form.Field
//       id='form-textarea-control-opinion'
//       control={TextArea}
//       label='Event Description'
//       placeholder='Opinion'
//     />
//     <Form.Field
//       id='form-input-control-error-email'
//       control={Input}
//       label='Website URL'
//     />
//     <StyledButton
//     onClick={()=> {
//         console.log("Hello")
//     }}
//     ><Icon name='add' />Add A Vendor</StyledButton>
//   </Form>

//         </StyledSegment>

//         <div id="vendorSection"></div>
//         </div>
//     )}}
