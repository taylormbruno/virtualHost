import React, { useState } from 'react'
import { Form, Image, Grid, Segment } from 'semantic-ui-react'
import Logo from "./signup.png"
import "./style.css"
import { StyledButton } from "./styledComponents.js"
import API from '../../utils/API'

function SignupForm()  {
  const [formObject, setFormObject] = useState();

  handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value});
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.signupUser({})
    .then(() => setFormObject({}))
    .catch(err => console.log(err));
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
                onChange={this.handleInputChange}  
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                name='password'
                onChange={this.handleInputChange}
              />
              <Form.Input 
                fluid icon='mail outline' 
                iconPosition='left' 
                placeholder='Email Address'
                name='email'
                onChange={this.handleInputChange}
              />
              <Form.Input 
                fluid icon='male'
                iconPosition='left' 
                placeholder='First Name'
                name="firstname"
                onChange={this.handleInputChange}
              />
                <Form.Input 
                fluid icon='male' 
                iconPosition='left' 
                placeholder='Last Name'
                name="lastname"
                onChange={this.handleInputChange}
                />
                <StyledButton fluid size='large' onClick={this.handleFormSubmit}>
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