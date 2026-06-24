import "./App.css";
import Myheader from "./components/Myheader";
import Nav from "./components/Nav";
import MyArticle from "./components/MyArticle";
import { useState, useCallback, useMemo } from "react";
import Controls from "./components/controls";
import CreateArticle from "./components/createArticle";
import UpdateArticle from "./components/UpdateArticle";
import { v4 as uuidv4 } from "uuid";

function App() {
  console.log("App render");
  const [id, setId] = useState(1);
  const [mode, setMode] = useState("welcome");
  const [subject, setSubject] = useState({
    title: "프론트엔드 개발자",
    desc: "기본언어인 html, css, javascript부터 학습합니다.",
  });
  const [content, setContent] = useState([
    { id: "1", title: "HTML", desc: "Hypertext Markup Language", difficulty: 1 },
    {
      id: "2",
      title: "CSS",
      desc: "CSS for design",
      difficulty: 2,
    },
    {
      id: "3",
      title: "Javascript",
      desc: "Javascript for interaction",
      difficulty: 3,
    },
  ]);
  // const [maxId, setMaxid] = useState(3);

  const welcome = { title: "welcome", desc: "Welcome to react" };

  let _title = null;
  let _desc = null;
  let _article = null;

  const selectedArticle = useMemo(() => content.find(item => item.id === id), [content, id]);

  const handleDelete = () => {
    if (window.confirm("정말 삭제할까요")) {
      setContent(prev => prev.filter(item => item.id !== id));
      setMode("welcome");
    } else {
      setMode("welcome");
    }
  };

  if (mode === "welcome") {
    _title = welcome.title;
    _desc = welcome.desc;
    _article = <MyArticle title={_title} desc={_desc} />;
  } else if (mode === "read") {
    if (selectedArticle) {
      _title = selectedArticle.title;
      _desc = selectedArticle.desc;
    }
    _article = (
      <MyArticle
        title={_title}
        desc={_desc}
        difficulty={selectedArticle.difficulty}
        onChangeMode={() => {
          setMode("update");
        }}
        onDelete={handleDelete}
      />
    );
  } else if (mode === "create") {
    _article = (
      <CreateArticle
        onSubmit={(_title, _desc, _difficulty) => {
          const newId = uuidv4();

          let _contents = content.concat({
            id: newId,
            title: _title,
            desc: _desc,
            difficulty: _difficulty,
          });
          setContent(_contents);
          // setMaxid(newId);
          setId(newId);
          setMode("read");
        }}
      />
    );
  } else if (mode === "update") {
    if (!selectedArticle) return null;

    _article = (
      <UpdateArticle
        title={selectedArticle.title}
        desc={selectedArticle.desc}
        onSubmit={(_title, _desc) => {
          setContent(prev =>
            prev.map(p =>
              p.id === id
                ? {
                    ...p,
                    title: _title,
                    desc: _desc,
                  }
                : p,
            ),
          );
          setMode("read");
        }}
      />
    );
  }

  const handleChangeMode = useCallback(_id => {
    console.log(_id);

    setMode("read");
    setId(_id);
  }, []);

  return (
    <>
      <Myheader
        title={subject.title}
        desc={subject.desc}
        onChangeMode={() => {
          setMode("welcome");
        }}
      />
      {/* <header>
        <h1
          className="logo"
          onClick={() => {
            setMode("welcome");
          }}
        >
          {subject.title}
        </h1>
        <p>{subject.desc}</p>
      </header> */}
      <Nav data={content} onChangeMode={handleChangeMode} />
      {_article}
      <hr />
      <Controls
        onChangeMode={() => {
          setMode("create");
        }}
      />
    </>
  );
}

export default App;
