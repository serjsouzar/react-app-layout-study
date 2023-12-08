import React from 'react'
import { Container, Content, ImagesContent, SubtitlePresentation, TitlePresentation } from './styles'

const Banner = () => {
  return (
    <Container>
      <Content>

        <TitlePresentation>
          <h1>Spin to Win</h1>
          <h2>Spin the wheel to win prizes</h2>
        </TitlePresentation>

        <SubtitlePresentation>  
          <p>
            Here you can add a few sentences explaining what prizes<br/>
            can be won and any other information you people to know
          </p>
          <button>PLAY NOW</button>
        </SubtitlePresentation>



      </Content>

      <ImagesContent>
        <div className='sphereOne'>
        <div className='sphereTwo'></div>
        </div>        
      </ImagesContent>
    </Container>
  )
}

export default Banner