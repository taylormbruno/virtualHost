import React, { Component } from 'react';
import { Form, Image, Grid, Segment } from 'semantic-ui-react';
import Logo from "./signup.png";
import "./style.css";
import { StyledButton } from "./styledComponents.js";
import API from '../../utils/API';
import validateForm from './validate';
// import { useHistory } from 'react-router-dom';
import Passport from "./GoogleAuth";
import queryString from "query-string";

class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  // const [this.state, setthis.state] = useState();
  
  handleInputChange = (event) => {
    if (event.target.name === "username") {
      event.target.value = event.target.value.toLowerCase();
    }
    const { name, value } = event.target;
    this.setState({...this.state, [name]: value });
    // setthis.state({...this.state, [name]: value});
  };

  componentDidMount = () => {
    var query = queryString.parse(window.location.search);
    if (query.token) {
      window.localStorage.setItem("jwt", query.token);
    }
  }

  // history = useHistory();

  // signupSuccess = (id) => {
  //   history.push('/user' + id);
  // }

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const isValid = validateForm(this.state);
    if (isValid === true) {
      const newObj = {
        username: this.state.username,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        password: this.state.pass1,
        email: this.state.email
      }
      let newUser = await API.signupUser(newObj);
      if (newUser.status === 200) {
        console.log(`Hello ${newUser.data.first_name} ${newUser.data.last_name}`);
        this.signupSuccess(newUser.data._id);
      }
      else {
        console.log(`Error ${newUser.status}: ${newUser.statusText}`)
      }
    }
  };
        
  render() {
    return(
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
       <Grid.Column id="container">
        <Form size='large'>
          <Segment stacked>
            <Image id="logo" src={Logo} />
            <div id="formContainer">
              <Form.Input 
                fluid icon='user' 
                iconPosition='left' 
                placeholder='Username (Required)'
                name='username'
                onChange={this.handleInputChange}  
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password (Required)'
                type='password'
                name='pass1'
                onChange={this.handleInputChange}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password (Required)'
                type='password'
                name='pass2'
                onChange={this.handleInputChange}
              />
              <Form.Input 
                fluid icon='mail outline' 
                iconPosition='left' 
                placeholder='Email Address (Required)'
                name='email'
                onChange={this.handleInputChange}
              />
              <Form.Input 
                fluid icon='male'
                iconPosition='left' 
                placeholder='First Name (Required)'
                name="first_name"
                onChange={this.handleInputChange}
              />
                <Form.Input 
                fluid icon='male' 
                iconPosition='left' 
                placeholder='Last Name (Required)'
                name="last_name"
                onChange={this.handleInputChange}
                />
                <StyledButton fluid size='large' onClick={this.handleFormSubmit} href="/login">
                  Join the Community
                </StyledButton>
              </div>
            </Segment>
          </Form>
          <Passport />
          <StyledButton>
            Continue As Guest
          </StyledButton>
        </Grid.Column>
      </Grid>
    );
  }
};

export default SignupForm;