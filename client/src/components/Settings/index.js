import React, { Component } from 'react';
import { StyledSegment, StyledHeader, StyledIcon, StyledForm, StyledButton } from './styledComponents';
import { Radio, Form, Icon } from 'semantic-ui-react'



class Settings extends Component {

// get true or false and set localhost

    render() {
        let lightMode = document.getElementById("lightMode");

        return(
    <StyledSegment id="container">
        <StyledHeader>Settings</StyledHeader>
        <StyledIcon color='grey' size='large' className="top" name="sun"/>
        <Radio 
        toggle 
        onClick={() => {
        this.props.updateLightMode()
        console.log(lightMode)
          }}
        />
        <StyledIcon color='grey' size='large' className="top" name="moon"/>
        <StyledForm>
            <Form.Field>
                <label>Username:</label>
                <input placeholder={this.props.userState.username} />
            </Form.Field>
            <Form.Field>
                <label>First Name:</label>
                <input placeholder={this.props.userState.fname} />
            </Form.Field>
            <Form.Field>
                <label>Last Name:</label>
                <input placeholder={this.props.userState.lname} />
            </Form.Field>
            <Form.Field>
                <label>Password:</label>
                <input type='password' />
            </Form.Field>
        </StyledForm>
        <StyledButton><Icon name='save' />Update Info</StyledButton>
        <StyledButton><Icon name='trash' />Delete Account</StyledButton>
    </StyledSegment>      
    )}
}

export default Settings