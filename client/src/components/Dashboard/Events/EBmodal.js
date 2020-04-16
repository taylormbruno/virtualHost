import React, {Component} from "react";
import { Modal, Grid, Segment } from 'semantic-ui-react';
import Events from "./index";
import Booths from "./index";
import { StyledHeader, StyledButton2 } from "./styledComponents";

class Emodal extends Component {
    render() {
        return(
            <Modal 
            id='EModal'
            trigger={
                <StyledButton2 align="center">
<<<<<<< HEAD
                    View host dashboard
=======
                    View Your Events and Booths
>>>>>>> c78ecbd2367b0b2cfd762a648047a484585cc475
                </StyledButton2>
            }
            basic >
            <Modal.Content>
                <Grid.Column width={7}>
                    <Segment  >
                        <StyledHeader>My Events</StyledHeader>
                        <Events 
                        userState={this.props.currentUser}
                        />
                    </Segment>
                    <Segment>
                        <StyledHeader >My Booths</StyledHeader>
                        <Booths  
                        userState={this.props.currentUser}
                        />
                    </Segment>
                </Grid.Column>
            </Modal.Content>
        </Modal>
        )
        
    }

}
export default Emodal;



