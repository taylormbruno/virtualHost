import React from "react";
import { Form, Grid, Image, Segment } from "semantic-ui-react";
import Logo from "./logo.png";
import "./style.css";
import { StyledButton } from "./styledComponents.js";
import API from '../../utils/API';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleInputChange = (event) => {
    if (event.target.name === "username") {
      event.target.value = event.target.value.toLowerCase();
    }
    const { name, value } = event.target;
    this.setState({...this.state, [name]: value });
  };

  signupSuccess = (id) => {
    useHistory().push('/mydashboard/' + id);
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
      const newObj = {
        username: this.state.username,
        password: this.state.password,
      }
      let newUser = await API.loginUser(newObj);
      if (newUser.status === 200) {
        console.log(`Hello ${newUser.data.first_name} ${newUser.data.last_name}`);
        this.loginSuccess(newUser.data._id);
      }
      else {
        console.log(`Error ${newUser.status}: ${newUser.statusText}`)
      }
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
        id="outerContainer"
      >
        <Grid.Column id="container">
          <Form size="large">
            <Segment stacked>
              <Image id="logo" src={Logo} />
              <div id="formContainer">
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  name="username"
                  onChange={this.handleInputChange}  
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={this.handleInputChange}  
                />
              </div>
              <StyledButton fluid size="large" id="login" onClick={this.handleFormSubmit}>
                Login
              </StyledButton>
              <StyledButton href="/signup" fluid size="large" >
                Create Account
              </StyledButton>
              <StyledButton fluid size="large">
                Continue As Guest
              </StyledButton>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default LoginForm;
