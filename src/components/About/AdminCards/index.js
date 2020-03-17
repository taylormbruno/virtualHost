import React from 'react'
import { Card } from 'semantic-ui-react'
import Jodie from "./jodie.jpg"
import Taylor from "./taylor.jpg"
import Kacie from "./kacie.jpg"
import { StyledButton, StyledImg, StyledIcon, Div } from "./styledComponents.js"
import Portfolio from "./portfolio.ico"
import LinkedIn from "./linkedin.ico"
import Github from "./github.png"
import "./style.css"

const CardExampleGroups = () => (
  <Card.Group centered id="cardGroup">
    <Card>
      <Card.Content>
        <Card.Header>Jodie Rhoades</Card.Header>
        <Card.Meta>Full Stack Developer</Card.Meta>
        <StyledImg
          size='small'
          src={Jodie}
        />
        <Card.Description>
          Used <strong>innovation and research skills</strong> to create project idea, configure beacons, learn new technologies, and much more.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui'>
        <a href="https://jodirhoades.github.io/portfolio/">
          <StyledButton>
            <StyledIcon src={Portfolio}/>
            <Div>Portfolio</Div>
          </StyledButton>
          </a>
          <a href="https://github.com/jodiRhoades">
          <StyledButton>
          <StyledIcon src={Github}/>
          <Div>Github</Div>
          </StyledButton>
          </a>
          <a href="https://www.linkedin.com/in/jodiriddlerhoades/">
          <StyledButton>
          <StyledIcon src={LinkedIn}/>
          <Div>LinkedIn</Div>
          </StyledButton>
          </a>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Card.Header>Taylor Bruno</Card.Header>
        <Card.Meta>Full Stack Developer</Card.Meta>
        <StyledImg
          size='small'
          src={Taylor}
        />
        <Card.Description>
          Utilized <strong>strong critical-thinking skills</strong> to find creative solutions to complicated back-end functionality.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui'>
        <a href="https://taylormbruno.github.io/">
          <StyledButton>
            <StyledIcon src={Portfolio}/>
            <Div>Portfolio</Div>
          </StyledButton>
        </a>
        <a href="https://github.com/taylormbruno">
          <StyledButton>
          <StyledIcon src={Github}/>
          <Div>Github</Div>
          </StyledButton>
          </a>
        <a href="https://www.linkedin.com/in/taylor-bruno-5b5a49189/">
          <StyledButton>
          <StyledIcon src={LinkedIn}/>
          <Div>LinkedIn</Div>
          </StyledButton>
          </a>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Card.Header>Kacie Hatley</Card.Header>
        <Card.Meta>Full Stack Developer</Card.Meta>
        <StyledImg
          size='small'
          src={Kacie}
        />
        <Card.Description>
          With <strong>style and passion,</strong> created a clean, efficient user interface utilizing a variety of cutting-edge technologies.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui'>
        <a href="https://kaciehatley.github.io/project-portfolio/">
          <StyledButton>
            <StyledIcon src={Portfolio}/>
            <Div>Portfolio</Div>
          </StyledButton>
          </a>
          <a href="https://github.com/kaciehatley">
            <StyledButton>
            <StyledIcon src={Github}/>
                <Div>Github</Div>
            </StyledButton>
          </a>
          <a href="https://www.linkedin.com/in/kacie-hatley/">
          <StyledButton>
          <StyledIcon src={LinkedIn}/>
          <Div>LinkedIn</Div>
          </StyledButton>
          </a>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default CardExampleGroups