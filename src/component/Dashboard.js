/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { INCREASE_SCORES, Z_INDEX_ITEMS } from "../redux/actions";
import { motion, transform } from "framer-motion";
const Dashboard = () => {
  const scores = useSelector((state) => state.scores);
  const name = useSelector((state) => state.name);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(INCREASE_SCORES(0));
    dispatch(Z_INDEX_ITEMS(1));
  };
  return (
    <motion.div
      className="w-screen h-screen flex relative"
      animate={{
        opacity: 1,
        transform: "translateY(0px)",
        transition: { duration: 0.5 },
      }}
      initial={{ opacity: 0, transform: "translateY(100px)" }}
    >
      <div className="w-[80%] h-[50%] bg-white m-auto rounded-xl p-3 flex flex-col justify-between">
        <div className="text-center text-[30px] text-purple-500">
          GOOB JOB, {name}! 🥳
        </div>
        <div className="flex">
          <div className="score w-[100px] h-[100px] border-purple-600 border-[5px] rounded-[50%] flex m-auto">
            <div className="m-auto text-[18px] ">{scores}/20</div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 text-center text-red-500 font-bold">
            <span></span>Wrong: {20 - scores}
          </div>
          <div className="w-1/2 text-center text-green-600 font-bold">
            True: {scores}
          </div>
        </div>
        <div className="flex gap-2">
          <Link
            onClick={handleClick}
            to={"/main"}
            className="w-1/2 bg-purple-600 p-[10px] rounded-lg text-white text-center active:translate-y-[5px] active:shadow-none shadow-[0px_5px_0px_2px_rgba(0,0,0,0.2)]"
          >
            Again
          </Link>
          <Link
            onClick={handleClick}
            to={"/"}
            className="w-1/2 bg-purple-600 p-[10px] rounded-lg text-white text-center active:translate-y-[5px] active:shadow-none shadow-[0px_5px_0px_2px_rgba(0,0,0,0.2)]"
          >
            Reset
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
