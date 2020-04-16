import React, {Component} from "react";
import { Modal, Grid, Segment } from 'semantic-ui-react';
import Events from "./index";
import Booths from "../Booths";
import { StyledHeader, StyledButton2 } from "./styledComponents";
import queryString from "query-string";

class Emodal extends Component {
    state = { open: false };

    open = () => this.setState({ open: true });
    close = () => this.setState({ open: false });

    componentDidMount() {
        const query = queryString.parse(window.location.search);
        if (query.modal) this.open();
    }

    render() {
        return(
            <Modal 
            id='EModal'
            trigger={
                <StyledButton2 align="center">
                    View Your Events and Booths
                </StyledButton2>
            }
            open={this.state.open}
            onOpen={this.open}
            onClose={this.close}
            basic >
            <Modal.Content>
                <h1 id="hostDash">HOST DASHBOARD</h1>
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



