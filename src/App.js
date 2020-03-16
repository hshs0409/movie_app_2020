import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    // 해쉬 라우터를 통해서 안에 라우터와 네비게이션을 집어넣는다. browser라우터 등 라우터 여러가지 존재
    // 여기 네이게이션을 통해서 Home 버튼과 홈링크과 어바웃 링크 생성
    // 라우터를 통해 각각의 url로 이동하고 그 url로 이동하면 해당하는 js를 연결
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
