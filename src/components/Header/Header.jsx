import React from 'react'
import { Container } from './styles'
import logoImg from './../../assets/Group 18.png'

const Header = () => {
  return (
    <Container>
      <img src={logoImg} width={154} height={27}/>
    </Container>
  )
}

export default Header