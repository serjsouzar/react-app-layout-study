import React from 'react'
import { BannerBackground, Container, Content, ImagesContent, SubtitlePresentation, TitlePresentation } from './styles'
import doctorImage from "./../../assets/doctor-presenting-something-isolated-white-background 2.png";

const Banner = () => {
  return (
    <BannerBackground>
    <Container>      
      <Content>
        <TitlePresentation>
          <h1>Spin to Win</h1>
          <h2>Spin the wheel to win prizes</h2>
        </TitlePresentation>

        <SubtitlePresentation>  
          <p>
          Here you can add a few sentences explaining what prizes<br/>can be won and any other information you want people to know
          </p>
          <button>PLAY NOW</button>
        </SubtitlePresentation>
      </Content>

      <ImagesContent>
        <div className='sphereOne'>
        </div>        
        <div className='sphereTwo'>        
        </div>
        <img src={doctorImage} alt='doctor-image' />
      </ImagesContent>      
    </Container>
  </BannerBackground>
  )
}

export default Banner