import styled from "styled-components";
import img from "../src/logo.svg";
import logo from "./images/logo_ques.png";

const Container = styled.main`
  margin: 10vh auto;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  gap: 50px;
  height: 80vh;
`;

const Column1 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: start;
`;

const DateSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DateHeader = styled.header`
  font-size: 90px;
  font-weight: 700;
`;

const DateArticle = styled.article`
  margin: 10px;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const WeatherSection = styled.section`
  margin-top: 30px;
  width: 250px;
  height: 250px;
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WeatherHeader = styled.h1`
  margin: 0;
  font-size: 30px;
  font-weight: 700;
  line-height: 35px;
`;

const Column2 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffdf8c;
`;

const TodoTitle = styled.section`
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

const TodoSection = styled.section`
  display: flex;
  margin-bottom: 10px;
`;

const TodoContentDiv = styled.article`
  border: 1px solid black;
  width: 230px;
  height: 40px;
  margin-right: 5px;
  padding-left: 10px;
  display: flex;
  align-items: center;
`;

const TodoCompleteDiv = styled.article`
  border: 1px solid black;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 30px;
  font-weight: 700;
  color: #ffeba6;
`;

const TodoCommandSection = styled.section`
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

const TodoCommandStatusDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 270px;
  height: 40px;

  & > span {
    font-size: 30px;
    font-weight: 700;
  }
`;

const Column3 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
`;

const MyNameArticle = styled.article`
  font-size: 28px;
  font-weight: 700;
`;

const MyJobArticle = styled.article`
  font-size: 28px;
  font-weight: 700;
`;

const FromCompanyArticle = styled.article`
  width: 240px;
  display: flex;
  justify-content: end;
  font-size: 8px;
  font-weight: 300;
`;

const App = () => {
  return (
    <Container>
      {/* 날짜, 날씨 */}
      <Column1>
        <DateSection>
          <DateHeader>09</DateHeader>
          <DateArticle>
            <div>TUESDAY</div>
            <div>MAY</div>
          </DateArticle>
        </DateSection>
        <WeatherSection>
          <img
            src={img}
            alt="img"
            style={{ width: "150px", height: "150px" }}
          />
          <WeatherHeader>Weather is</WeatherHeader>
          <WeatherHeader>{`Sunny`}</WeatherHeader>
        </WeatherSection>
      </Column1>
      {/* 일정 */}
      <Column2>
        <TodoTitle>
          <span>QuesDiary</span>
          <img src={logo} alt="logo" />
        </TodoTitle>
        <TodoSection>
          <TodoContentDiv>
            <span>Do something</span>
          </TodoContentDiv>
          <TodoCompleteDiv>
            <span>✓</span>
          </TodoCompleteDiv>
        </TodoSection>
        <TodoSection>
          <TodoContentDiv>
            <span>Do something</span>
          </TodoContentDiv>
          <TodoCompleteDiv>
            <span>✓</span>
          </TodoCompleteDiv>
        </TodoSection>
        <TodoSection>
          <TodoContentDiv>
            <span>Do something</span>
          </TodoContentDiv>
          <TodoCompleteDiv>
            <span>✓</span>
          </TodoCompleteDiv>
        </TodoSection>
        {/* 일정 입력 */}
        {/* 특정 일정 클릭하면, UPDATE, 클릭되지 않은 상태이면, ADD */}
        <TodoCommandSection>
          <TodoCommandStatusDiv>
            <span>Add</span>
            {/* <span>Update</span> */}
            <span>+</span>
          </TodoCommandStatusDiv>
          <input type="text" />
        </TodoCommandSection>
      </Column2>
      {/* 출처 */}
      <Column3>
        <MyNameArticle>SeungJun, Han</MyNameArticle>
        <MyJobArticle>Frontend Engineer</MyJobArticle>
        <FromCompanyArticle>From QUES</FromCompanyArticle>
      </Column3>
    </Container>
  );
};

export default App;
