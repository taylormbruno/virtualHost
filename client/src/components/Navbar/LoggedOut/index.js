import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Logo from '../locationIcon.png'
import "../style.css"

class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    console.log("-----LoggedOut index.js-----\n", this.props)

    return (
      <div id="navbar">
      <Menu stackable>
        <Menu.Item href="/" id="top">
          <img alt="Virtual Host Icon" src={Logo} />
        </Menu.Item>

        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
          href="/#about"
        >
          About Virtual Host
        </Menu.Item>

        <Menu.Item
          name='view'
          active={activeItem === 'view'}
          onClick={this.handleItemClick}
          href="/events"
        >
          View Events
        </Menu.Item>
        <Menu.Item
          name='login'
          active={activeItem === 'login'}
          onClick={() => {
            console.log('clicked')
            this.props.updateLoginStatus()
          }}
          floated="right"
          position='right'
        >
          Login 
        </Menu.Item>
      </Menu>
      </div>
    )
  }
}


export default MenuExampleStackable;