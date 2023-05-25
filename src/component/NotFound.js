/** @format */

import React from "react";
import x from "../imgs/x.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const NotFound = () => {
  return (
    <div className="w-screen h-screen flex bg-transparent">
      <motion.div
        animate={{ scale: [0.5, 1] }}
        transition={{ duration: 0.5 }}
      className="m-auto w-[70%] h-[30%] bg-white rounded-2xl text-center p-[20px] flex flex-col justify-between">
        <h1 className="text-[32px] text-red-600 font-bold">
          Page not found! {":((("}
        </h1>
        <Link
          to={"/"}
          className="border text-white bg-purple-700 w-full px-[20px] py-[10px] flex rounded-xl active:translate-y-[5px] active:shadow-none shadow-[0px_5px_0px_2px_rgba(0,0,0,0.2)]"
        >
          <p className="m-auto font-bold">Return to home page</p>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
