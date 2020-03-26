import React, { Component } from 'react'
import { Header, Table, Icon } from 'semantic-ui-react'
import { StyledHeader } from './styledComponent'

const favoriteSeeds = [
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

class Favorites extends Component {
    render() {
        return(
            <Table>
                <Table.Header>
                    <Table.Row>
                        <StyledHeader>Booth</StyledHeader>
                        <StyledHeader>Favorites</StyledHeader>
                        <StyledHeader></StyledHeader>
                    </Table.Row>
                </Table.Header>

            <Table.Body>
                {favoriteSeeds.map((favorites) => (
                <Table.Row className="hover">
                    <Table.Cell>
                    <Header as='h4' image>
                    <Header.Content>
                        {favorites.boothTitle}
                    <Header.Subheader>{favorites.eventName}</Header.Subheader>
                    </Header.Content>
                </Header>
                </Table.Cell>
                <Table.Cell>
                    {favorites.favorites}
                </Table.Cell>
                <Table.Cell>
                    <Icon name='star' />
                </Table.Cell>
            </Table.Row>
            ))}
    </Table.Body>
  </Table>
    )
}
}

export default Favorites