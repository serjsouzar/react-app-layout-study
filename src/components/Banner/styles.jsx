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

  @media (max-width: 790px) {
    width: 370px;
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
  width: 424px;

  @media (max-width: 790px) {
    width: 370px;
    height: 600px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;        
  }

  h1 {
    font-size: 68px;
    font-style: normal;
    font-weight: 700;
    line-height: 85px;
    font-family: Montserrat;

    @media (max-width: 790px) {
      font-size: 36px;     
    }
  }
  h2 {
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 351px;
    position: relative;

    @media (max-width: 790px) {
      font-size: 20px;  
      position: relative;
      bottom: 11%;
    }
  }
  h1,
  h2 {
    color: #343c54;
  }
`;

export const SubtitlePresentation = styled.div`
  display: flex;
  flex-direction: column;  
  width: 449px;

  @media (max-width: 790px) {
    width: 370px;
    height: 600px;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: #343c54;
    height: 48px;
    position: relative;    
    
    &:first-child{
      top: 23px;
    }

    @media (max-width: 790px) {
      text-align: center;
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      width: 350px;
      top: -25px;

      &:first-child{      
      width: 368px;            
      top: unset;
    }
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
    font-family: Roboto;

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
    right: 54%;
    padding-top: 3px;
    bottom: 53px;
    z-index: 8;
    transition: all ease 0.2s;

    @media (max-width: 790px) {
      width: 284.183px;
      height: 306.044px;
      flex-shrink: 0;
      right: 54%;
      bottom: 23px;
    }
  }

  @media (max-width: 790px) {
    width: 331.092px;
    height: 331.092px;
    flex-shrink: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    position: relative;
    left: 22px;
    top: 5px;
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

    @media (max-width: 790px) {
      width: 331.092px;
      height: 331.092px;      
      left: 4%;
    }
  }

  .sphereTwo {
    width: 583.749px;
    height: 583.749px;
    flex-shrink: 0;
    top: 3px;
    left: 43%;
    transition: all ease 0.2s;

    border-radius: 583.749px;
    background: rgba(0, 120, 230, 0.1);
    position: relative;
    z-index: 5;

    @media (max-width: 790px) {
      width: 265.852px;
      height: 265.852px;
      flex-shrink: 0;
      top: 1%;
      left: 43%;
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

    @media (max-width: 790px) {
      width: 54.651px;
      height: 54.651px;
      flex-shrink: 0;
      border: 3px solid rgba(225, 237, 248, 1);
      left: 20px;

      img {
        width: 29.313px;
        height: 33.784px;
      }
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

    @media (max-width: 790px) {
      width: 56.928px;
      height: 56.928px;
      flex-shrink: 0;
      border: 3px solid rgba(225, 237, 248, 1);
      left: 80%;
      bottom: 7%;

      img {
        width: 26.911px;
        height: 37.779px;
        flex-shrink: 0;
      }
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
    left: 82%;
    top: 26%;

    img {
      width: 50px;
      height: 50px;
    }

    @media (max-width: 790px) {
      width: 39.166px;
      height: 39.166px;
      flex-shrink: 0;
      top: 24%;

      img {
        width: 22.771px;
        height: 22.771px;
      }
    }
  }
`;
