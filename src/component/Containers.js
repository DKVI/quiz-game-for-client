/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Container = () => {
  const name = useSelector((state) => state.name);
  return (
    <div className="w-screen h-screen flex">
      <motion.div
        animate={{
          opacity: 1,
          transform: "translateY(0px)",
          transition: { duration: 0.5 },
        }}
        initial={{ opacity: 0, transform: "translateY(100px)" }}
        className="w-[80%] h-[50%] bg-white m-auto rounded-xl p-[20px] flex flex-col justify-between"
      >
        <h1 className="text-[32px] text-center text-purple-700 font-bold">
          Welcome {name}!
        </h1>
        <div className="">
          <h1 className="text-left text-[18px]">
            Hệ quản trị và an toàn cơ sở dữ liệu
          </h1>
          <h1>20 questions</h1>
          <p>15 minutes</p>
        </div>
        <Link
          to={"/test"}
          className="px-[20px] py-[10px] bg-purple-700 text-[20px] text-white rounded-lg w-full text-center active:translate-y-[5px] active:shadow-none shadow-[0px_5px_0px_2px_rgba(0,0,0,0.2)]"
        >
          Start quiz
        </Link>
      </motion.div>
    </div>
  );
};

export default Container;
