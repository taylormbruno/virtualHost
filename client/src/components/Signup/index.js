import React, { useState } from 'react';
import { Form, Image, Grid, Segment } from 'semantic-ui-react';
import Logo from "./signup.png";
import "./style.css";
import { StyledButton } from "./styledComponents.js";
import API from '../../utils/API';
// import axios from 'axios';

function SignupForm()  {
  const [formObject, setFormObject] = useState();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value});
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("---HANDLE FORM---\n", formObject); // fires
    let newUser = API.signupUser(formObject);
    console.log("---Hello---\n", newUser); // return promise { 422 unprocessable entity }
    // axios.get('/user', {
      //   params: {
      //     ID: response._id
      //   }
      // })
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // })
    //   .then((request, response) => { 
    //   console.log("---SIGNUP REQ---\n", request); // does not fire.
    //   console.log("---SIGNUP RES---\n", response); // does not fire.
    //   setFormObject({});
    // }).catch(err => console.log(err));
  };

  // render() {
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
                placeholder='Username'
                name='username'
                onChange={handleInputChange}  
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                name='password'
                onChange={handleInputChange}
              />
              <Form.Input 
                fluid icon='mail outline' 
                iconPosition='left' 
                placeholder='Email Address'
                name='email'
                onChange={handleInputChange}
              />
              <Form.Input 
                fluid icon='male'
                iconPosition='left' 
                placeholder='First Name'
                name="first_name"
                onChange={handleInputChange}
              />
                <Form.Input 
                fluid icon='male' 
                iconPosition='left' 
                placeholder='Last Name'
                name="last_name"
                onChange={handleInputChange}
                />
                <StyledButton fluid size='large' onClick={handleFormSubmit}>
                  Join the Community
                </StyledButton>
              </div>
            </Segment>
          </Form>
          <StyledButton>
            Continue As Guest
          </StyledButton>
        </Grid.Column>
      </Grid>
    );
  // };
};

export default SignupForm;