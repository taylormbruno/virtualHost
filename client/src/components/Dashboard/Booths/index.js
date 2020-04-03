import React, { Component } from 'react'
import { Card, Icon, Grid, Image } from 'semantic-ui-react'
import { StyledIcon } from './styledComponents'
import API from "../../../utils/API";
import { StyledButton } from "./styledComponents"


// const boothseeds = [
//   {
//     "id": 1,
//     "image": require("./museum.jpg"),
//     "boothTitle" : "Great Works of Michelangelo",
//     "eventName": "MET Night of the Renaissance",
//     "description": "Experience the great works of a painter, sculptor, and poet whose works have stoof the test of time.",
//     "favorites": 165
//   },
//   {
//       "id": 2,
//       "image": require("./fruit.jpg"),
//       "boothTitle" : "Plentiful Acres",
//       "eventName": "Stanly County Farmers Market",
//       "description": "At Plentiful Acres, we strive to grow organic products and use the profits to invest in our wonderful community.",
//       "favorites": 24
//     },
//     {
//       "id": 3,
//       "image": require("./artshow.jpg"),
//       "boothTitle" : "A Different Beat",
//       "eventName": "NoDa Arts Expo",
//       "description": "Using records, CDs, and cassette tapes, we create art to resemble the greatest artists in history from Michael Jackson to John Mayer to Billie Holiday.",
//       "favorites": 88
//     }
// ]


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
  <Grid id='container' columns='three'>
    <Grid.Column width={3} verticalAlign="middle">
      <StyledIcon 
        onClick={()=>{
          this.backIndex()
          console.log(this.state.currentCardIndex)
          }} 
        name='arrow alternate circle left'/>
    </Grid.Column>
    <Grid.Column width={10}>
      <Card>
        <Image src={boothImage}/>
        <Card.Content>
          <Card.Header>{boothName}</Card.Header>
          {/* This section had the event name however that's an extra API call for every booth. Worth it?
          <Card.Meta>
            <span className='date'>{boothseeds[this.state.currentCardIndex].eventName}</span>
          </Card.Meta> */}
          <Card.Description>
            {description}
          </Card.Description>
        </Card.Content>
        {/* This looks like it's on the wrong component???***** */}
        <Card.Content extra>
            <Icon name='star' />
              Favorites Go Here
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
    <StyledButton>
          <Icon name="wifi" />
          Activate Beacon
        </StyledButton>
    <StyledButton>
      <Icon name="delete" />
      Deactivate Beacon
    </StyledButton>
  </Grid>
  )
  }
}