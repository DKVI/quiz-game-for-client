/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Result = () => {
  return (
    <div className="w-full min-h-full flex">
      <div className="m-auto text-center">
        <div className="text-[32px] mb-[12px] text-purple-700">
          You have completed all questions!🎉
        </div>
        <div className="mb-[12px]">Submit and see your scores</div>
        <div className="w-full flex mt-[10px]">
          <Link
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
