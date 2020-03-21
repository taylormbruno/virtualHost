import React, { useState } from 'react';
import { Form, Image, Grid, Segment } from 'semantic-ui-react';
import Logo from "./signup.png";
import "./style.css";
import { StyledButton } from "./styledComponents.js";
import API from '../../utils/API';
import validateForm from './validate';

function SignupForm()  {
  const [formObject, setFormObject] = useState();
  
  const handleInputChange = (event) => {
    // username
    if (event.target.name === "username") {
      event.target.value = event.target.value.toLowerCase();
    }
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value});
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const isValid = validateForm(formObject);
    if (isValid === true) {
      console.log("---HANDLE FORM---\n", formObject); // fires
      const newObj = {
        username: formObject.username,
        first_name: formObject.first_name,
        last_name: formObject.last_name,
        password: formObject.pass1,
        email: formObject.email
      }
      let newUser = await API.signupUser(newObj);
      console.log(`Hello ${newUser.data.first_name} ${newUser.data.last_name}`)
    }
    else {
      // alertUser;
    }
    
    // pseudocode
    // global state = (create object with necessary user data)
  };

  // once user is logged in (need to add auto login after signup)
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
                placeholder='Username (Required)'
                name='username'
                onChange={handleInputChange}  
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password (Required)'
                type='password'
                name='pass1'
                onChange={handleInputChange}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password (Required)'
                type='password'
                name='pass2'
                onChange={handleInputChange}
              />
              <Form.Input 
                fluid icon='mail outline' 
                iconPosition='left' 
                placeholder='Email Address (Required)'
                name='email'
                onChange={handleInputChange}
              />
              <Form.Input 
                fluid icon='male'
                iconPosition='left' 
                placeholder='First Name (Required)'
                name="first_name"
                onChange={handleInputChange}
              />
                <Form.Input 
                fluid icon='male' 
                iconPosition='left' 
                placeholder='Last Name (Required)'
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