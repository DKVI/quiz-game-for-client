/** @format */

import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Dashboard, Login, Test } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { GET_QUESTIONS } from "./redux/actions";
function App() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  useEffect(() => {
    dispatch(GET_QUESTIONS());
  }, []);
  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);
  return (
    <div className="w-screen h-screen bg-night bg-cover bg-center">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Container />} />
        <Route path="/test" element={<Test />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
