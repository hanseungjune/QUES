import { styled } from "styled-components";
import { media } from "./MediaSettingStyle";

export const Column3 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;

  @media ${media.mobile} {
    align-items: center;
    width: 100vw;
    color: white;
    background-color: black;
  }
`;

export const MyNameArticle = styled.article`
  font-size: 28px;
  font-weight: 700;

  @media ${media.wideDesktop} {
    font-size: 20px;
  }

  @media ${media.mobile} {
    margin-top: 5vw;
    font-size: 5vw;
    margin-bottom: 1vw;
  }
`;

export const MyJobArticle = styled.article`
  font-size: 28px;
  font-weight: 700;

  @media ${media.wideDesktop} {
    font-size: 20px;
  }

  @media ${media.mobile} {
    font-size: 5vw;
    margin-bottom: 1vw;
  }
`;

export const FromCompanyArticle = styled.article`
  width: 240px;
  display: flex;
  justify-content: end;
  font-size: 8px;
  font-weight: 300;

  @media ${media.wideDesktop} {
    width: 180px;
    font-size: 6px;
  }

  @media ${media.mobile} {
    justify-content: center;
    font-size: 3vw;
    margin-bottom: 5vw;
  }
`;
