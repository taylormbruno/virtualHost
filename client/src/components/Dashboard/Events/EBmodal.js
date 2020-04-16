import React from "react";
import { Modal, Grid, Segment } from 'semantic-ui-react';
import Events from "./index";
import Booths from "./index";
import { StyledHeader, StyledButton2 } from "./styledComponents";

const EBmodal = (props) => (
    <Modal 
        id='EModal'
        trigger={
            <StyledButton2 align="center">
                Create an Event
            </StyledButton2>
        }
        basic >
        <Modal.Content>
            <Grid.Column width={7}>
                <Segment  >
                    <StyledHeader>My Events</StyledHeader>
                        {/* userState={this.props.currentUser}  */}
                    <Events />
                </Segment>
                <Segment>
                    <StyledHeader >My Booths</StyledHeader>
                        {/* userState={this.props.currentUser} */}
                    <Booths  />
                </Segment>
            </Grid.Column>
        </Modal.Content>
    </Modal>

)
export default EBmodal;



