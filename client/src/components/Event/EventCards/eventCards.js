import React from 'react'
import { Card } from 'semantic-ui-react'

const EventCard = () => (
    <Card.Group>
      <div class="ui three column grid link stackable cards" id="cardGroup">
        <div class="column">
          <div class="ui fluid card link card" href="https://virtual-host.herokuapp.com/">
            <div class="image">
              <img src={VirtualHost} />
            </div>
            <div class="content">
              <div class="header" className="eventName">Demo Day</div>
              <div class="meta">
                <a className= "location">The Barrel Room at Triple C Brewing</a>
                <a className= "start_time">Wednesday 6pm - className= "end_time">8pm</a>                
              </div>
              <div class="description">
                Demo Day is an event where recent graduates from UNC-Charlotte's Coding Classes are able to reveal their final projects.
            </div>
            </div>
            <div class="extra content">
              <span>
                <i class="right floated star icon"></i>
                Click Here to See Particpants
            </span>
            </div>
          </div>
        </div>
  
        <div class="column">
          <div class="ui fluid card">
            <div class="image">
              <img src={VirtualHost} />
            </div>
            <div class="content">
              <div class="header" className="eventVendor">Virtual Host</div>
              <div class="meta">
                <a>Taylor Bruno - Kacie Hatley - Jodi Rhoades</a>
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
              <img src={VirtualHost} />
            </div>
            <div class="content">
              <div class="header" className="eventVendor">Virtual Host</div>
              <div class="meta">
                <a>Taylor Bruno - Kacie Hatley - Jodi Rhoades</a>
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
  
  export default EventCard;