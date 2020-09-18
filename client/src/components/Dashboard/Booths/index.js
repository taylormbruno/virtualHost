import React, { Component } from 'react'
import { Card, Icon, Grid, Image } from 'semantic-ui-react'
import { StyledIcon } from './styledComponents'
import API from "../../../utils/API";
import { StyledButton } from "./styledComponents"
import "./style.css"




export default class Booths extends Component {

  // Needs to map through all booths and see if current user's id matches the booth's host id. If they match, the booth's id should be pushed to usersBooths array in state.

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentCardIndex: 0,
  //     usersBooths: []    
  //   };
  // }

  constructor(props) {
    super(props);
    this.state = {
      currentCardIndex: 0,
      boothData: []
    };
  }

  componentDidMount() {
    // Need to add that if hostID matches the user ID, map results to different array
    this.retrieveAllVendors().then(response => {
      console.log(response[0])
      this.setState({
        ...this.state,
        boothData: response
      });
    });
  }

  retrieveAllVendors = async () => {
    const master = await API.findVendorByHost();
    console.log("MASTER DATA\n", master.data);
    return master.data;
  };


  nextIndex = () => {
    let totalIndexes=this.state.boothData.length-1;
    let newCardIndex = this.state.currentCardIndex+1;
    
    if (newCardIndex <=totalIndexes) {
      this.setState({ currentCardIndex: newCardIndex })
    }
    else {
      console.log("End of list")
    }
  }

  backIndex = () => {
    let newCardIndex = this.state.currentCardIndex-1;
    
    if (newCardIndex >= 0) {
      this.setState({ currentCardIndex: newCardIndex })
    }
    else {
      console.log("End of list")
    }
  }

  render() {
    // let boothData=this.state.boothData[0]
    let index=this.state.currentCardIndex;
    let boothName="";
    let boothImage="";
    // let eventTitle="";
    let description="";
    if (this.state.boothData.length) {
      boothName = this.state.boothData[index].vendor_name;
      boothImage = this.state.boothData[index].image;
      description=this.state.boothData[index].description;
    }
    console.log(boothImage);

  return(
  <Grid id='cardcontainer' columns='three' textAlign='center'>
    <Grid.Column width={3} verticalAlign="middle">
      <StyledIcon 
        onClick={()=>{
          this.backIndex()
          console.log(this.state.currentCardIndex)
          }} 
        name='arrow alternate circle left'/>
    </Grid.Column>
    <Grid.Column width={10}>
      <Card id="boothCard">
        <Image src={boothImage} textAlign='center'/>
        <Card.Content>
          <Card.Header>{boothName}</Card.Header>
          <Card.Description>
            {description}
          </Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
    <Grid.Column width={3} verticalAlign="middle" >
      <StyledIcon 
        name='arrow alternate circle right' 
        onClick={()=>{
          this.nextIndex()
          console.log(this.state.currentCardIndex)
        }}/>
    </Grid.Column>
   {/* <StyledButton>
          <Icon name="wifi" />
          Activate Beacon
        </StyledButton> */}
    <StyledButton>
      <Icon name="delete" />
      Deactivate Beacon
    </StyledButton> 
  </Grid>
  )
  }
}