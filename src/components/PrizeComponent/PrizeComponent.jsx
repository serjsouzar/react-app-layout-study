import React from "react";
import { Container, ProductDetails } from "./styles";

const PrizeComponent = ({ name, number, product }) => {
  return (
    <Container>
      <img src={product} alt={name} width={50} height={50}/>
      <ProductDetails>
        <p>Prize {number}</p>
        <h2>{name}</h2>
      </ProductDetails>
    </Container>
  );
};

export default PrizeComponent;
