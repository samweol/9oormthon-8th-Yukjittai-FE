import Layout from "./components/Layout/Layout";
import Button from "./components/Button/Button";
import { styled } from "styled-components";
import { COLOR } from "./utils/color";
import { FONT_SIZE } from "./utils/fontSize";
import { useNavigate } from "react-router-dom";

const TitleStyle = styled.h1`
  display: flex;
  flex-direction: column;
  color: ${COLOR["font-gray-800"]};
  font-weight: 500;
  font-size: ${FONT_SIZE.xl};
  margin-bottom: 32px;
`;

const Emphasis = styled.strong`
  font-weight: 700;
`;

const SectionStyle = styled.section`
  position: absolute;
  bottom: 50px;
`;

function App() {
  const navigate = useNavigate();
  return (
    <Layout hasHeader={true}>
      <SectionStyle>
        <TitleStyle>
          <span>
            <Emphasis>한끼하꼼</Emphasis>과 함께
          </span>
          <span>후회 없는 여행 하세요!</span>
        </TitleStyle>
        <Button
          onClickHandler={() => {
            navigate("search-alternative");
          }}
        >
          일정 조율하러 가기
        </Button>
      </SectionStyle>
    </Layout>
  );
}

export default App;
