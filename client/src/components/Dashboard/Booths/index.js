import React, { Component } from 'react'
import { Card, Icon, Grid, Image } from 'semantic-ui-react'
import { StyledIcon } from './styledComponents'
import API from "../../../utils/API";


const boothseeds = [
  {
    "id": 1,
    "image": require("./museum.jpg"),
    "boothTitle" : "Great Works of Michelangelo",
    "eventName": "MET Night of the Renaissance",
    "description": "Experience the great works of a painter, sculptor, and poet whose works have stoof the test of time.",
    "favorites": 165
  },
  {
      "id": 2,
      "image": require("./fruit.jpg"),
      "boothTitle" : "Plentiful Acres",
      "eventName": "Stanly County Farmers Market",
      "description": "At Plentiful Acres, we strive to grow organic products and use the profits to invest in our wonderful community.",
      "favorites": 24
    },
    {
      "id": 3,
      "image": require("./artshow.jpg"),
      "boothTitle" : "A Different Beat",
      "eventName": "NoDa Arts Expo",
      "description": "Using records, CDs, and cassette tapes, we create art to resemble the greatest artists in history from Michael Jackson to John Mayer to Billie Holiday.",
      "favorites": 88
    }
]


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
    let favorites=[1,2,3];
    let newCardIndex = this.state.currentCardIndex+1;
    
    if (favorites[newCardIndex]) {
      this.setState({ currentCardIndex: newCardIndex })
    }
    else {
      console.log("End of list")
    }
  }

  backIndex = () => {
    let favorites=[1,2,3];
    let newCardIndex = this.state.currentCardIndex-1;
    
    if (favorites[newCardIndex]) {
      this.setState({ currentCardIndex: newCardIndex })
    }
    else {
      console.log("End of list")
    }
  }

  render() {
    let index=this.state.currentCardIndex;

  return(
  <Grid columns='three'>
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
        <Image src={boothseeds[this.state.currentCardIndex].image} wrapped ui={false}/>
        <Card.Content>
          <Card.Header>{boothseeds[this.state.currentCardIndex].boothTitle}</Card.Header>
          <Card.Meta>
            <span className='date'>{boothseeds[this.state.currentCardIndex].eventName}</span>
          </Card.Meta>
          <Card.Description>
            {boothseeds[this.state.currentCardIndex].description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Icon name='star' />
              {boothseeds[this.state.currentCardIndex].favorites} Favorites
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
  </Grid>
  )
  }
}