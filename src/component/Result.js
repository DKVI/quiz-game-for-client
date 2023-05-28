/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as apis from "../api";
const Result = () => {
  const scores = useSelector((state) => state.scores);
  const name = useSelector((state) => state.name);
  const handelClick = () => {
    const formData = {
      _id: Math.floor(Math.random() * 10000),
      name: name,
      score: scores,
    };
    console.log(formData);
    const addUser = async (formData) => {
      const response = await apis.addUser(formData);
      console.log(response);
    };
    addUser(formData);
  };
  return (
    <div className="w-full min-h-full flex">
      <div className="m-auto text-center">
        <div className="text-[32px] mb-[12px] text-purple-700">
          You have completed all questions!🎉
        </div>
        <div className="mb-[12px]">Submit and see your scores</div>
        <div className="w-full flex mt-[10px]">
          <Link
            onClick={handelClick}
            to="/dashboard"
            className=" m-auto border w-[60%] text-white bg-purple-700 px-[20px] py-[10px] flex rounded-xl active:translate-y-[5px] active:shadow-none shadow-[0px_5px_0px_2px_rgba(0,0,0,0.2)]"
          >
            <p className="text-[16px] m-auto">Submit</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Result;
