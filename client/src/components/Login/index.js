import React from 'react'
import { Form, Grid, Image, Segment } from 'semantic-ui-react'
import Logo from "./logo.png"
import "./style.css"
import { StyledButton } from "./styledComponents.js"

const LoginForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' id="outerContainer">
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
          </div>
          <StyledButton fluid size='large' id="login">
            Login
          </StyledButton>
                <StyledButton href="/signup" fluid size='large'>
            Create Account
        </StyledButton>
        <StyledButton fluid size='large'>
            Continue As Guest
        </StyledButton>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
)

export default LoginForm