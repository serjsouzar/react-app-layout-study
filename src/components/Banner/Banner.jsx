import React from "react";
import {
  BannerBackground,
  Container,
  Content,
  ImagesContent,
  SubtitlePresentation,
  TitlePresentation,
} from "./styles";
import doctorImage from "./../../assets/doctor-presenting-something-isolated-white-background 2.png";
import ipadImage from "./../../assets/image 14.png";
import iphoneImage from "./../../assets/image 15.png";
import smartWatchImage from "./../../assets/image 16.png";

const Banner = () => {
  return (
    <BannerBackground>
      <Container>
        <Content>
          <TitlePresentation>
            <h1>Spin to Win</h1>
            <h2>Spin the wheel to win prizes</h2>
          </TitlePresentation>

          <SubtitlePresentation>
            <p>Here you can add a few sentences explaining what prizes</p>
            <p>can be won and any other information you want people to know</p>
            <button>PLAY NOW</button>
          </SubtitlePresentation>
        </Content>

        <ImagesContent>
          <div className="sphereOne">
            <div className="sphereTwo">
              <div className="ipadImage">
                <img src={ipadImage} alt="ipad-img" />
              </div>
              <div className="iphoneImage">
                <img src={iphoneImage} alt="ipad-img" />
              </div>
              <div className="smartWatchImage">
                <img src={smartWatchImage} alt="ipad-img" />
              </div>
            </div>
            <img src={doctorImage} className="doctorImg" alt="doctor-img" />
          </div>
        </ImagesContent>
      </Container>
    </BannerBackground>
  );
};

export default Banner;
