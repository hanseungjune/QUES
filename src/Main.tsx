import { styled } from "styled-components";
import DateWeatherCompo from "./components/DateWeatherCompo";
import IntroduceCompo from "./components/IntroduceCompo";
import TodosCompo from "./components/TodosCompo";
import { media } from "./styles/MediaSettingStyle";

export const Container = styled.main`
  margin: 10vh auto;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  gap: 50px;
  height: 80vh;

  @media ${media.wideDesktop} {
    gap: 40px;
  }

  @media ${media.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Main = () => {
  return (
    <Container>
      {/* 날짜, 날씨 */}
      <DateWeatherCompo />
      {/* 일정 */}
      <TodosCompo />
      {/* 출처 */}
      <IntroduceCompo />
    </Container>
  );
};

export default Main;
