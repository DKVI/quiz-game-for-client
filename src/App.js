/** @format */

import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Dashboard, Login, Test, Error } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { GET_QUESTIONS } from "./redux/actions";
import NotFound from "./component/NotFound";
function App() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  useEffect(() => {
    dispatch(GET_QUESTIONS());
  }, []);
  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);
  {
    if (window.innerWidth > 768) {
      return (
        <div className="w-screen h-screen">
          <Error />
        </div>
      );
    } else {
      return (
        <div className="w-screen h-screen bg-night bg-cover bg-center overflow-hidden">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main" element={<Container />} />
            <Route path="/test" element={<Test />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      );
    }
  }
}

export default App;
