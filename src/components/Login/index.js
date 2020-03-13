import React from 'react'
import { Button, Form, Grid, Image, Segment } from 'semantic-ui-react'
import Logo from "./logo.png"
import "./style.css"

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

          <Button fluid size='large' id="login">
            Login
          </Button>
          </div>
        </Segment>
      </Form>
      <Button id="createAct">
            Create Account
        </Button>
        <Button id="guest">
            Continue As Guest
        </Button>
    </Grid.Column>
  </Grid>
)

export default LoginForm