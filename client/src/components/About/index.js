import React from 'react'
// import { Form, Grid, Image, Segment } from 'semantic-ui-react'
import { Segment, Image, Header } from 'semantic-ui-react'
import "./style.css"
import Iphone from "./iphone.jpg"
import { StyledButton } from "./styledComponents.js"
import AdminCards from "./AdminCards/index.js"

const About = () => (
<Segment id="about">
    <Image id='aboutimg' src={Iphone}></Image>
    <br/>
    <p>"The Virtual Host is an app where events turn into educated experiences.  Imagine attending an event that is set up expo style. This is where you can go from booth to booth or vendor to vendor but it’s crowded and you can’t get close enough to see what a vendor is offering. Simply sign into your Virtual Host app and it will send a notification with a link to that specific vendor’s information.  Want to know what they offer? It’s there.  Want to know who the presenters are?  It’s there.  Need their contact info or want to save their link as a favorite or make notes about it so that you can come back to it at another time. You can. And most important of them all, “Where’s the bathroom?”  We can show you that, too!""
    </p>

    <Header as='h1' id="teamHeader">MEET THE TEAM</Header>

    <AdminCards />

    <StyledButton href="#top">Return To Top</StyledButton>
</Segment>
)

export default About