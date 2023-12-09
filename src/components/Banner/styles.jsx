import { styled } from "styled-components";

export const BannerBackground = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #e1edf8 0%, rgba(0, 120, 230, 0.2) 100%);
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 600px;
  max-width: 1720px;
  width: 100%;
  flex-wrap: wrap;
  transition: all ease 0.2s;

  @media (max-width: 680px) {
    width: 390px;
    height: 600px;
    flex-shrink: 0;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  max-width: 449px;
  justify-content: space-between;
`;

export const TitlePresentation = styled.div`
  width: 416px;

  @media (max-width: 680px) {
    width: 390px;
    height: 600px;
  }

  h1 {
    font-size: 68px;
    font-style: normal;
    font-weight: 600;
    line-height: 85px;
    font-family: Montserrat;    

    @media (max-width: 680px) {
      font-size: 36px;
      font-style: normal;
      font-weight: balder;
      line-height: 85px;
    }
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

  @media (max-width: 680px) {
    width: 390px;
    height: 600px;
    flex-shrink: 0;
  }

  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: #343c54;
    height: 48px;

    @media (max-width: 680px) {
      text-align: center;
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      width: 380px;
    }
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
    letter-spacing: 2px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const ImagesContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 781px;
  height: 672px;
  transition: all ease 0.2s;

  .doctorImg {
    width: 624px;
    height: 672px;
    flex-shrink: 0;
    opacity: 1;
    position: relative;
    right: 50%;
    padding-top: 3px;
    bottom: 11%;
    z-index: 8;
  }

  @media (max-width: 680px) {
    width: 331.092px;
    height: 331.092px;
    flex-shrink: 0;
  }

  .sphereOne {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 727px;
    height: 727px;
    flex-shrink: 0;
    position: absolute;
    transition: all ease 0.2s;
    top: 33px;

    border-radius: 727px;
    background: rgba(0, 120, 230, 0.05);

    @media (max-width: 680px) {
      width: 331.092px;
      height: 331.092px;
      flex-shrink: 0;
    }
  }

  .sphereTwo {
    width: 583.749px;
    height: 583.749px;
    flex-shrink: 0;
    top: -17px;
    left: 40%;
    transition: all ease 0.2s;

    border-radius: 583.749px;
    background: rgba(0, 120, 230, 0.1);
    position: relative;
    z-index: 5;

    @media (max-width: 680px) {
      width: 265.852px;
      height: 265.852px;
      flex-shrink: 0;
      top: 35px;
      left: 32px;
    }
  }

  .ipadImage {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 5px solid rgba(225, 237, 248, 1);
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 1px 1px 8px 5px rgba(0, 120, 230, 0.1);

    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 5px;
    left: 45px;

    img {
      width: 64.364px;
      height: 74.182px;
      position: unset;
    }
  }

  .iphoneImage {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 5px solid rgba(225, 237, 248, 1);
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 1px 1px 8px 5px rgba(0, 120, 230, 0.1);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 82%;
    bottom: 6%;

    img {
      width: 59.091px;
      height: 82.955px;
      position: unset;
    }
  }

  .smartWatchImage {
    width: 86px;
    height: 86px;
    flex-shrink: 0;
    border-radius: 50%;
    border: 3px solid rgba(225, 237, 248, 1);
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 1px 1px 8px 5px rgba(0, 120, 230, 0.1);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left:85%;
    top:26%;

    img {
      width: 50px;
      height: 50px;      
    }
  }
`;
