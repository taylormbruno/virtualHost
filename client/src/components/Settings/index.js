import React, { Component } from 'react';
import { StyledSegment, StyledHeader, StyledIcon } from './styledComponents';
import { Radio } from 'semantic-ui-react'



class Settings extends Component {


    render() {
        return(
    <StyledSegment id="container">
        <StyledHeader>Settings</StyledHeader>
        <StyledIcon color='grey' size='large' className="top" name="sun"/>
        <Radio 
        toggle 
        onClick={() => {
        console.log('clicked')
        this.props.updateLightMode()
          }}
        />
        <StyledIcon color='grey' size='large' className="top" name="moon"/>
    </StyledSegment>      
    )}
}

export default Settings