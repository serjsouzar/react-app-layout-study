import { styled } from "styled-components";

export const PrizesBackGround = styled.div`
  width: 100%;
  height: 358px;
  background: #eff5fa;
  position: relative;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 1720px;

  @media (max-width: 790px) {
    width: 370px;
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
    scroll-behavior: auto;
    overflow-y: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
