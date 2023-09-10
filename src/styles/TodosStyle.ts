import { styled } from "styled-components";
import { media } from "./MediaSettingStyle";

export const Column2 = styled.section`
  display: flex;
  width: 350px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffdf8c;

  @media ${media.wideDesktop} {
    width: 270px;
  }

  @media ${media.desktop} {
    width: 230px;
  }

  @media ${media.tablet} {
    width: 200px;
  }

  @media ${media.mobile} {
    width: 70vw;
  }
`;

export const TodoTitle = styled.section`
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  padding-bottom: 20px;
  padding-top: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid black;

  & > span {
    font-size: 40px;
    font-weight: 700;
  }

  & > img {
    border: 1px solid black;
    width: 50px;
    height: 50px;
    display: block;
  }

  @media ${media.wideDesktop} {
    & > span {
      font-size: 32px;
      font-weight: 700;
    }

    & > img {
      border: 1px solid black;
      width: 35px;
      height: 35px;
      display: block;
    }
  }

  @media ${media.desktop} {
    padding-bottom: 15px;
    padding-top: 15px;
    & > span {
      font-size: 20px;
      font-weight: 700;
    }

    & > img {
      border: 1px solid black;
      width: 30px;
      height: 30px;
      display: block;
    }
  }

  @media ${media.mobile} {
    width: 63vw;
    height: 10vw;

    & > span {
      margin-left: 25px;
      font-size: 5vw;
      font-weight: 700;
    }

    & > img {
      margin-right: 25px;
      width: 10vw;
      height: 10vw;
    }
  }
`;

export const TodosSection = styled.section`
  width: 80%;
  height: 460px;
  max-height: 460px;
  overflow-y: auto;

  @media ${media.mobile} {
    width: 63vw;
  }
`;

export const TodoSection = styled.section`
  display: flex;
  margin-bottom: 10px;
`;

export const TodoContentDiv = styled.article`
  border: 1px solid black;
  width: 230px;
  height: 40px;
  margin-right: 5px;
  padding-left: 10px;
  display: flex;
  align-items: center;

  @media ${media.wideDesktop} {
    width: 180px;
    height: 30px;
    font-size: 14px;
    line-height: 30px;
  }

  @media ${media.mobile} {
    width: 52vw;
    height: 8vw;
    font-size: 4vw;
    line-height: 8vw;
  }
`;

export const TodoCompleteDiv = styled.article`
  border: 1px solid black;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 30px;
  font-weight: 700;
  color: #ffeba6;

  & > span {
    cursor: pointer;
  }

  @media ${media.wideDesktop} {
    width: 30px;
    height: 30px;
    font-size: 20px;
    line-height: 30px;
  }

  @media ${media.mobile} {
    width: 8vw;
    height: 8vw;
    font-size: 5vw;
    line-height: 8vw;
  }
`;

export const TodoCommandSection = styled.form`
  z-index: 2;
  background-color: #ffdf8c;
  position: fixed;
  bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > input {
    width: 290px;
    height: 40px;
    border: none;
    outline: none;
    font-size: 16px;
  }

  @media ${media.wideDesktop} {
    bottom: 105px;
    width: 260px;

    & > input {
      width: 220px;
      height: 30px;
      border: none;
      outline: none;
    }
  }

  @media ${media.desktop} {
    bottom: 100px;
    width: 200px;

    & > input {
      width: 200px;
      height: 30px;
      border: none;
      outline: none;
      font-size: 16px;
    }
  }

  @media ${media.tablet} {
    bottom: 100px;
    width: 160px;

    & > input {
      width: 160px;
      height: 30px;
      border: none;
      outline: none;
      font-size: 16px;
    }
  }

  @media ${media.mobile} {
    box-shadow: 1px 1px 10px black;
    width: 100%;
    bottom: 0px;
    position: sticky;

    & > input {
      width: 90%;
      height: 30px;
      border: none;
      outline: none;
      margin-bottom: 15px;
      font-size: 20px;
    }
  }
`;

export const TodoCommandStatusDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 270px;
  height: 40px;
  text-align: center;

  & > button {
    border: none;
    background-color: transparent;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
  }

  & > span {
    font-size: 24px;
    font-weight: 700;
    line-height: 40px;
    cursor: pointer;
  }

  @media ${media.wideDesktop} {
    width: 220px;

    & > button {
      font-size: 20px;
    }

    & > span {
      font-size: 20px;
      line-height: 40px;
    }
  }

  @media ${media.desktop} {
    width: 220px;

    & > button {
      width: 48px;
      font-size: 16px;
    }

    & > span {
      width: 48px;
      font-size: 16px;
    }
  }

  @media ${media.tablet} {
    width: 180px;

    & > button {
      width: 36px;
      font-size: 14px;
    }

    & > span {
      width: 36px;
      font-size: 14px;
    }
  }

  @media ${media.mobile} {
    width: 90%;

    & > button {
      width: 48px;
      font-size: 20px;
    }

    & > span {
      width: 48px;
      font-size:20px;
    }
  }
`;
