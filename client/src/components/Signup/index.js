import React, { useState } from 'react';
import { Form, Image, Grid, Segment } from 'semantic-ui-react';
import Logo from "./signup.png";
import "./style.css";
import { StyledButton } from "./styledComponents.js";
import API from '../../utils/API';
// import axios from 'axios';
import { Link } from "react-router-dom";

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
    console.log("---Hello---\n", newUser);
    // pseudocode
    // global state = (create object with necessary user data)
  };

  // will use to redirect
  // const redirectToReferrer = () => {
  //   if (globalstate.loggedIn === true) {
  //           return <Redirect to={"/user" + newUser._id} />
  //       }
  // }
        

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
                <StyledButton fluid size='large' onClick={handleFormSubmit} href="/login">
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