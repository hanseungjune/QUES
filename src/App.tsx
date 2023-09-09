import { Container } from "./App.style";
import DateWeatherCompo from "./components/DateWeatherCompo";
import IntroduceCompo from "./components/IntroduceCompo";
import TodosCompo from "./components/TodosCompo";

const App = () => {
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

export default App;
