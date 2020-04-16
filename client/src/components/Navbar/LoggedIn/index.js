import React, { Component } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Logo from '../locationIcon.png'
import "../style.css"

class MenuExampleStackable extends Component {
  
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { activeItem } = this.state
    const greeting = `Hello, ${this.props.fname}!`

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
        <Menu.Menu position='right'>
        <Dropdown text={greeting} pointing className='link item'>
      <Dropdown.Menu>
        {/* <Dropdown.Header>My Stuff</Dropdown.Header> */}
        <Dropdown.Item href={`/user/mydashboard/?q=${this.props.userState.userID}`}>User Dashboard</Dropdown.Item>
        <Dropdown.Item href={`/user/mydashboard/?q=${this.props.userState.userID}&modal=true`}>Host Dashboard</Dropdown.Item>
        {/* <Dropdown.Item href={`/user/mydashboard/?q=${this.props.userState.userID}`}>My Booths</Dropdown.Item> */}
        {/* <Dropdown.Item>Notes & Favorites</Dropdown.Item> */}
        <Dropdown.Divider />
        <Dropdown.Item href='/settings'>Settings</Dropdown.Item>
        <Dropdown.Item 
        onClick={() => {
          this.props.logout();
        }}
        href="/"
        >Sign Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Menu.Menu>
      </Menu>
      </div>
    )
  }
}

export default MenuExampleStackable;