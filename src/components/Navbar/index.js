import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Logo from './locationIcon.png'
import "./style.css"

export default class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div id="navbar">
      <Menu stackable>
        <Menu.Item id="top">
          <img alt="Virtual Host Icon" src={Logo} />
        </Menu.Item>

        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        ><a href="#about">
          About Virtual Host</a>
        </Menu.Item>

        <Menu.Item
          name='view'
          active={activeItem === 'view'}
          onClick={this.handleItemClick}
        >
          View Events
        </Menu.Item>
        {/* This will be an if/else statement...if user is logged in, they will be greeted and have a dropdown menu. Those not logged in will see "Sign in as a user" */}
        <Menu.Item
          name='login'
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
          floated="right"
          position='right'
        >
          Log In
        </Menu.Item>
        

        {/* <Menu.Item
          name='sign-in'
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}
        >
          Register As Vendor
        </Menu.Item> */}
      </Menu>
      </div>
    )
  }
}