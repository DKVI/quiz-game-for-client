/** @format */
import { useState } from "react";
import * as apis from "../api";
import { useDispatch } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import React from "react";
import { ADD_USER } from "../redux/actions";
const Login = () => {
  const [id, setId] = useState();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(ADD_USER(input));
    // localStorage.setItem("users", JSON.stringify(input));
    // const addUser = async (input) => {
    //   const response = await apis.addUser(input);
    //   console.log(response);
    // };
    // addUser(input);
  };
  return (
    <div className="flex w-screen h-screen bg-inherit">
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
            }}
            required
          />
        </div>
        <Link
          className="border text-white bg-purple-700 w-full px-[20px] py-[10px] flex rounded-xl"
          onClick={handleClick}
          to={`/main`}
        >
          <p className="m-auto text-[32px]">JOIN!</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
