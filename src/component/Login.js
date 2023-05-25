/** @format */
import { useState } from "react";
import * as apis from "../api";
import { useDispatch } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import React from "react";
import { ADD_USER } from "../redux/actions";
import { motion } from "framer-motion";
import { Error } from "../component";
const Login = () => {
  const [id, setId] = useState();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleClick = () => {
    if (input === "") {
      document.querySelector(".message").innerHTML = "Please enter your name!";
      return;
    }
    dispatch(ADD_USER(input));
  };
  return (
    <motion.div
      className="flex w-screen h-screen bg-inherit"
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
      initial={{ opacity: 0, scale: 0.5 }}
    >
      <div className="m-auto w-[70%] h-[40%] bg-white py-[20px] px-[30px] flex flex-col items-center rounded-xl gap-3 justify-between">
        <h1 className="text-purple-400 font-bold text-[32px]">WELCOME!</h1>
        <div className="w-full">
          <input
            type="text"
            className="border-2 border-gray-500 w-full p-[10px] outline-none rounded-lg"
            value={input}
            placeholder="ENTER YOUR NAME"
            onChange={(e) => {
              setInput(e.target.value);
              document.querySelector(".message").innerHTML = "";
            }}
            required
          />
          <div className="message text-red-500 text-[12px] mt-[10px]"></div>
        </div>
        <Link
          animate={{ scale: 1, transition: { duration: 0.5 } }}
          initial={{ scale: 0.5 }}
          className="border text-white bg-purple-700 w-full px-[20px] py-[10px] flex rounded-xl active:translate-y-[5px] active:shadow-none shadow-[0px_5px_0px_2px_rgba(0,0,0,0.2)]"
          onClick={handleClick}
          to={input === "" ? "/" : "/main"}
        >
          <p className="m-auto text-[32px]">JOIN!</p>
        </Link>
      </div>
    </motion.div>
  );
};

export default Login;
