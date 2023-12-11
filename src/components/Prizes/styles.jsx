import { styled } from "styled-components";

export const PrizesBackGround = styled.div`
  width: 100%;
  height: 358px;
  background: #eff5fa;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Container = styled.div`
  max-width: 1720px;

  @media (max-width: 790px) {
    width: 370px;
    scroll-behavior: smooth;
    overflow-y: scroll;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
export const PrizesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (max-width: 790px) {
    display: grid;
    grid-auto-flow: column;
    width: 1274px;
  }
`;
