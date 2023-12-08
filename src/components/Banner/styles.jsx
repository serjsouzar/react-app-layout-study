import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  max-width: 1920px;
  width: 100%;
  background: linear-gradient(180deg, #e1edf8 0%, rgba(0, 120, 230, 0.2) 100%);
`;

export const Content = styled.div`
  width: 449px;
  height: 256px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  max-width: 449px;
`;

export const TitlePresentation = styled.div`
  width: 416px;

  h1 {
    font-size: 68px;
    font-style: normal;
    font-weight: 700;
    line-height: 85px;
  }
  h2 {
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 351px;
    position: relative;
  }
  h1,
  h2 {
    color: #343c54;
  }
`;

export const SubtitlePresentation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  width: 449px;

  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: #343c54;
    height: 48px;
  }

  button {
    width: 215px;
    height: 49px;
    background-color: #0078e7;
    color: #fff;
    padding: 15px 62px;
    gap: 10px;
    border: none;
    font-weight: 600;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const ImagesContent = styled.div`
  width: 781px;
  height: 672px;

  .sphereOne {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 727px;
    height: 727px;
    flex-shrink: 0;

    border-radius: 727px;
    opacity: 0.05;
    background: #0078e6;
  }

  .sphereTwo {
    width: 583.749px;
    height: 583.749px;
    flex-shrink: 0;

    border-radius: 583.749px;
    opacity: 0.1;
    background: #0078e6;
    position: relative;
    z-index: 5;
  }
`;
