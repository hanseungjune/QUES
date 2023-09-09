import { styled, keyframes } from "styled-components";

export const Container = styled.main`
  margin: 10vh auto;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  gap: 50px;
  height: 80vh;
`;

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
`;

export const DateArticle = styled.article`
  margin: 10px;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
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
  }
`;

export const WeatherHeader = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  line-height: 35px;
`;

export const Column2 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffdf8c;
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
`;

export const TodoCommandSection = styled.section`
  z-index: 2;
  background-color: #ffdf8c;
  position: fixed;
  bottom: 120px;
  display: flex;
  flex-direction: column;

  & > input {
    height: 40px;
    border: none;
    outline: none;
  }
`;

export const TodoCommandStatusDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 270px;
  height: 40px;

  & > span {
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const Column3 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
`;

export const MyNameArticle = styled.article`
  font-size: 28px;
  font-weight: 700;
`;

export const MyJobArticle = styled.article`
  font-size: 28px;
  font-weight: 700;
`;

export const FromCompanyArticle = styled.article`
  width: 240px;
  display: flex;
  justify-content: end;
  font-size: 8px;
  font-weight: 300;
`;
