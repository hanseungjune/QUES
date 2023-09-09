import { styled } from "styled-components";

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

export const TodoCommandSection = styled.form`
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
`;
