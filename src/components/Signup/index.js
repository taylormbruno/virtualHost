import React from 'react'
import { Form, Image, Grid, Segment } from 'semantic-ui-react'
import Logo from "./signup.png"
import "./style.css"
import { StyledButton } from "./styledComponents.js"

const SignupForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column id="container">
      <Form size='large'>
        <Segment stacked>
        <Image id="logo" src={Logo} />
          <div id="formContainer">
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'/>
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />
          <Form.Input fluid icon='mail outline' iconPosition='left' placeholder='Email Adress'/>
          <Form.Input fluid icon='male' iconPosition='left' placeholder='First Name'/>
          <Form.Input fluid icon='male' iconPosition='left' placeholder='Last Name'/>
          <StyledButton fluid size='large'>
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
)

export default SignupForm