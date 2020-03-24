import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
// import Dashboard from "./dashboard.png"
// import "./style.css"
// import Events from './Events/index.js'
// import { StyledCell } from "./styledComponents"
import Museum from './museum.jpg'

const extra = (
  <span>
    <Icon name='star' />
    16 Favorites
  </span>
  )

const Favorites = () => (
    <Card
    centered
    image={Museum}
    header='Booth Title'
    meta='Event Title'
    description='Here will be a short description of your booth'
    extra={extra}
  /> 
)

export default Favorites