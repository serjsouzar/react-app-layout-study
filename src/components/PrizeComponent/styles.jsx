import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 8px;
  border-bottom: 2px solid #0078E7;
  background-color: #fff;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

  &:hover{
    transition: all ease 0.2s;
    background-color: rgba(0, 120, 230, 0.10);
    cursor: pointer;
  }

  width: 270px;
  height: 100px;
  flex-shrink: 0;
`;
export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
