import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import "./App.css";
import TitleWrap from "./com/TitleWrap";
import Timer from "./com/Timer";
import Login from "./com/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Routes>
          <Route path = "/" element = {<Login />}/>
          <Route path = "/timer" element = {<Timer />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;