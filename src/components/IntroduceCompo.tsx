import {
  Column3,
  FromCompanyArticle,
  MyJobArticle,
  MyNameArticle,
} from "../styles/IntroduceStyle";

const IntroduceCompo = () => {
  return (
    <Column3>
      <MyNameArticle>SeungJun, Han</MyNameArticle>
      <MyJobArticle>Frontend Engineer</MyJobArticle>
      <FromCompanyArticle>From QUES</FromCompanyArticle>
    </Column3>
  );
};

export default IntroduceCompo;
