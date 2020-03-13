import React from 'react'
import { Form, Grid, Image, Segment } from 'semantic-ui-react'
import Logo from "./logo.png"
import "./style.css"
import { StyledButton } from "./styledComponents.js"

const LoginForm = () => (
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
          <StyledButton fluid size='large' id="login">
            Login
          </StyledButton>
          </div>
        </Segment>
      </Form>
      <StyledButton className="shortBtn">
            Create Account
        </StyledButton>
        <StyledButton className="shortBtn">
            Continue As Guest
        </StyledButton>
    </Grid.Column>
  </Grid>
)

export default LoginForm