import React, { Component } from "react";
import { Form, Image, Grid, Popup } from "semantic-ui-react";
import Logo from "./signup.png";
import "./style.css";
import { StyledButton, StyledSegment } from "./styledComponents.js";
import API from "../../utils/API";
import validateForm from "./validate";
import Passport from "./GoogleAuth";
import queryString from "query-string";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formdata: {},
      returned: {},
      errors: {
        username: false,
        uniqueUser: false,
        unError: false,
        password: false,
        passError: false,
        passLength: false,
        userInPass: false,
        confirmError: false,
        firstError: false,
        lastError: false,
        email: false,
        emailError: false,
        uniqueEmail: false,
      },
    };
  }

  componentDidMount = () => {
    let query = queryString.parse(window.location.search);
    console.log(query);
  };

  handleInputChange = (event) => {
    if (event.target.name === "username") {
      event.target.value = event.target.value.toLowerCase();
    }
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      formdata: { ...this.state.formdata, [name]: value },
    });
  };

  signupSuccess = () => {
    setTimeout(
      () =>
        (window.location = "/user/mydashboard/?q=" + this.state.returned._id),
      1000
    );
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm(this.state.formdata);
    console.log(errors);
    if (Object.values(errors).indexOf(true) > -1) {
      console.log("Errors in signup");
      this.setState({ ...this.state, errors: errors });
      console.log(this.state);
      } else {
        const newObj = {
          username: this.state.formdata.username,
          first_name: this.state.formdata.first_name,
          last_name: this.state.formdata.last_name,
          password: this.state.formdata.pass1,
          email: this.state.formdata.email,
        };
        let newUser = await API.signupUser(newObj);
        if (newUser.status === 200) {
          console.log(
            `Hello ${newUser.data.first_name} ${newUser.data.last_name}`
          );
          this.setState({ ...this.state, returned: newUser.data });
          this.signupSuccess();
        } else {
          console.log(`Error ${newUser.status}: ${newUser.statusText}`);
        }
    }
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column id="container">
          <Form size="large" onSubmit={this.handleFormSubmit}>
            <StyledSegment stacked>
              <Image id="logo" src={Logo} />
              <div id="formContainer">
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username (Required)"
                  name="username"
                  onChange={this.handleInputChange}
                  onClick={this.hideRequirements}
                  error={
                    this.state.errors.username
                      ? (this.state.errors.uniqueUser
                          ? "Username must be unique. "
                          : "") +
                        (this.state.errors.unError
                          ? "Username must contain only letters, numbers and underscores."
                          : "")
                      : false
                  }
                />
                <Popup content="Password must contain at least six characters, one uppercase, one lowercase and one number."
                  trigger={<Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password (Required)"
                    type="password"
                    name="pass1"
                    onChange={this.handleInputChange}
                    onClick={this.showRequirements}
                    error={
                      this.state.errors.password
                        ? (this.state.errors.passLength
                            ? "Password does not contain at least six characters. "
                            : "") +
                          (this.state.errors.passError
                            ? "Password does not include at least one uppercase and lowercase letter, and one numerical character. "
                            : "") +
                          (this.state.errors.userInPass
                            ? "Password can not contain username. "
                            : "")
                        : false
                    }
                  /> } position='left center'>
                </Popup>
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Confirm Password"
                  type="password"
                  name="pass2"
                  onChange={this.handleInputChange}
                  error={
                    this.state.errors.confirmError
                      ? "Passwords do not match."
                      : false
                  }
                />

                <Form.Input
                  fluid
                  icon="mail outline"
                  iconPosition="left"
                  placeholder="Email Address (Required)"
                  name="email"
                  onChange={this.handleInputChange}
                  error={
                    this.state.errors.email
                      ? (this.state.errors.emailError
                          ? "Please enter a valid email address. "
                          : "") +
                        (this.state.errors.uniqueEmail
                          ? "Email must be unique."
                          : "")
                      : false
                  }
                />

                <Form.Input
                  fluid
                  icon="male"
                  iconPosition="left"
                  placeholder="First Name (Required)"
                  name="first_name"
                  onChange={this.handleInputChange}
                  onClick={this.hideRequirements}
                  error={
                    this.state.errors.firstError
                      ? "Please enter a valid first name."
                      : false
                  }
                />

                <Form.Input
                  fluid
                  icon="male"
                  iconPosition="left"
                  placeholder="Last Name (Required)"
                  name="last_name"
                  onChange={this.handleInputChange}
                  onClick={this.hideRequirements}
                  error={
                    this.state.errors.lastError
                      ? "Please enter a valid last name."
                      : false
                  }
                />

                {/* <Form success>
                  <Message
                    success
                    header="Form Completed"
                    content="You're all signed up."
                  /> */}
                <StyledButton fluid size="large" type="submit">
                  Join the Community
                </StyledButton>
                {/* </Form> */}
              </div>
            </StyledSegment>
          </Form>
          <Passport />
          <StyledButton className="bottom" href="/events">
            Continue As Guest
          </StyledButton>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SignupForm;
