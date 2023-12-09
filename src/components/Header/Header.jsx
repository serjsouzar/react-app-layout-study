import React from "react";
import { Container, HeaderBackground } from "./styles";
import logoImg from "./../../assets/Group 18.png";

const Header = () => {
  return (
    <HeaderBackground>
      <Container>
        <img src={logoImg} width={154} height={27} alt="logo-image"/>
      </Container>
    </HeaderBackground>
  );
};

export default Header;
