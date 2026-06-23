import "./App.css";
import Myheader from "./components/Myheader";
import Nav from "./components/Nav";
import MyArticle from "./components/MyArticle";
import { useState } from "react";

function App() {
  const [subject, setSubject] = useState({
    title: "프론트엔드 개발자",
    desc: "기본언어인 html, css, javascript부터 학습합니다.",
  });
  const [content, setContent] = useState([
    { id: 1, title: "UI/UX 개발", desc: "사용자 경험을 고려한 직관적이고 반응성 높은 화면 구현" },
    {
      id: 2,
      title: "재사용이 가능한 UI 개발",
      desc: "컴포넌트 기반으로 동일한 UI를 효율적으로 재사용 가능",
    },
    { id: 3, title: "애니메이션 구현", desc: "상태 변화에 따른 자연스럽고 동적인 화면 효과 구현" },
  ]);
  return (
    <>
      <Myheader title={subject.title} desc={subject.desc} />
      <Nav data={content} />
      <MyArticle title="UI/UX 개발" desc="사용자 경험을 고려한 직관적이고 반응성 높은 화면 구현" />
    </>
  );
}

export default App;
