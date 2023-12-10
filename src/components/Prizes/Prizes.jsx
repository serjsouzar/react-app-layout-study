import React from 'react'
import { Container, PrizesBackGround, PrizesContainer } from './styles'
import PrizeComponent from '../PrizeComponent/PrizeComponent'
import ipadImage from "./../../assets/image 14.png";
import iphoneImage from "./../../assets/image 15.png";
import smartWatchImage from "./../../assets/image 16.png";
import appleTagsImage from "./../../assets/image 17.png";

const Prizes = () => {
  return (
    <PrizesBackGround>
      <Container>
        <PrizesContainer>
          <PrizeComponent name="Ipad Pro" number={1} product={ipadImage}/>
          <PrizeComponent name="Iphone 13 Pro" number={2} product={iphoneImage} />
          <PrizeComponent name="Apple Watch 6" number={3}  product={smartWatchImage}/>
          <PrizeComponent name="Apple Tags" number={4} product={appleTagsImage}/>
        </PrizesContainer>
      </Container>
    </PrizesBackGround>
  )
}

export default Prizes