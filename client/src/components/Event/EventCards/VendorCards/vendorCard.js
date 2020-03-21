import React from 'react'
import { Card } from 'semantic-ui-react'
import VirtualHost from './Images/virtualHost.png'
import '../style.css'; 


const VendorCard = () => (
  <Card.Group>
    <div class="ui three column grid link stackable cards" id="cardGroup">
      <div class="column">
        <div class="ui fluid card link card" href="https://virtual-host.herokuapp.com/">
          <div class="image">
            <img src={VirtualHost} alt="logo" />
          </div>
          <div class="content">
            <div class="header" className="eventVendor">Virtual Host</div>
            <div class="meta">
              <span>Taylor Bruno - Kacie Hatley - Jodi Rhoades</span>
            </div>
            <div class="description">
              Virtual Host uses notifications on your phone to guide your through the event informing you along the way.
          </div>
          </div>
          <div class="extra content">
            <span>
              <i class="right floated star icon"></i>
              Read More
          </span>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="ui fluid card">
          <div class="image">
            <img src={VirtualHost} alt="logo" />
          </div>
          <div class="content">
            <div class="header" className="eventVendor">Virtual Host</div>
            <div class="meta">
              <span>Taylor Bruno - Kacie Hatley - Jodi Rhoades</span>
            </div>
            <div class="description">
              Virtual Host uses notifications on your phone to guide your through the event informing you along the way.
          </div>
          </div>
          <div class="extra content">
            <span>
              <i class="right floated star icon"></i>
              Read More
          </span>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="ui fluid card">
          <div class="image">
            <img src={VirtualHost} alt="logo" />
          </div>
          <div class="content">
            <div class="header" className="eventVendor">Virtual Host</div>
            <div class="meta">
              <span>Taylor Bruno - Kacie Hatley - Jodi Rhoades</span>
            </div>
            <div class="description">
              Virtual Host uses notifications on your phone to guide your through the event informing you along the way.
          </div>
          </div>
          <div class="extra content">
            <span>
              <i class="right floated star icon"></i>
              Read More
          </span>
          </div>
        </div>
      </div>
    </div>
  </Card.Group>
)

export default VendorCard;