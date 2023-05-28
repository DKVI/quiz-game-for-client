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
          <motion.h1
            animate={{ color: ["#000", "#fff", "#000"], Infinity }}
            infinite
            className="text-[20px] text-center"
          >
            Hệ quản trị và an toàn cơ sở dữ liệu
          </motion.h1>
          <div className="w-full justify-between flex px-[30px] mt-[10px]">
            <div className="w-[80px] h-[80px] border-[4px] border-green-400 flex">
              <p className="m-auto text-green-400 font-bold">20 câu</p>
            </div>
            <div className="w-[80px] h-[80px] border-[4px] border-red-400 flex">
              <p className="m-auto text-red-400 font-bold">15 phút</p>
            </div>
          </div>
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
