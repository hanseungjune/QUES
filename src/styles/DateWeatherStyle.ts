import { styled, keyframes } from "styled-components";
import { media } from "./MediaSettingStyle";

export const Column1 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: start;
`;

export const DateSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DateHeader = styled.header`
  font-size: 90px;
  font-weight: 700;

  @media ${media.wideDesktop} {
    font-size: 50px;
    font-weight: 700;
  }

  @media ${media.mobile} {
    font-size: 19.5vw;
    margin-right: 10px;
  }
`;

export const DateArticle = styled.article`
  margin: 10px;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media ${media.wideDesktop} {
    font-size: 18px;
  }

  @media ${media.mobile} {
    font-size: 6.5vw;
    margin-top: 20px;
  }
`;

const shakeAnimation = keyframes`
  0% { transform: translateY(-10px); }
  50% { transform: translateY(0px); }
  100% { transform: translateY(-10px); }
`;

export const WeatherSection = styled.section`
  margin-top: 30px;
  width: 250px;
  height: 250px;
  box-shadow: 1px 1px 5px black;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > img {
    animation: ${shakeAnimation} 2s infinite;
    width: 150px;
    height: 150px;
  }

  @media ${media.wideDesktop} {
    margin-top: 15px;
    width: 180px;
    height: 200px;

    & > img {
      width: 120px;
      height: 120px;
    }
  }

  @media ${media.mobile} {
    width: 65vw;
    height: 45vw;

    & > img {
      width: 20vw;
      height: 20vw;
    }
  }
`;

export const WeatherHeader = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  line-height: 35px;

  @media ${media.wideDesktop} {
    font-size: 16px;
  }

  @media ${media.mobile} {
    font-size: 4vw;
  }
`;
