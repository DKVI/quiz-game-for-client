/** @format */

import React, { useCallback, useEffect } from "react";
import Items from "./Items";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_RANDOM } from "../redux/actions";
import Result from "./Result";
const Test = () => {
  const [time, setTime] = useState(15 * 60);
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(0);
  const showItem = useSelector((state) => state.itemId);
  const questions = useSelector((state) => state.questionsList);
  const dispatch = useDispatch();
  useEffect(() => {
    const random = [];
    for (let i = 0; i < 20; i++) {
      let value = Math.floor(Math.random() * 20);
      random.forEach((item) => {
        if (item === value) {
          value = Math.floor(Math.random() * 20);
        }
      });
      random.push(value);
    }
    dispatch(ADD_RANDOM(random));
  }, []);
  const random = useSelector((state) => state.random);
  let length = questions.length;
  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
        if (seconds != 0) {
          setSeconds(seconds - 1);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      } else if (time === 0) {
        clearTimeout(timer);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);
  return (
    <div className="w-screen h-screen px-[30px] py-[100px] bg-white">
      <div className="w-full h-1/3 bg-night bg-center bg-cover fixed top-0 left-0 right-0 rounded-xl"></div>
      <div className="bg-white w-full h-full relative rounded-xl">
        <div className="timer w-[100px] flex h-[100px] rounded-[50%] absolute left-[50%] top-0 border-purple-400 border-[5px] bg-white translate-x-[-50%] translate-y-[-50%]  z-[1000]">
          <div className="m-auto text-[24px]">
            <span>
              {minutes.toString().length === 1 ? "0" + minutes : minutes}
            </span>
            :
            <span>
              {seconds.toString().length === 1 ? "0" + seconds : seconds}
            </span>
          </div>
        </div>
        <div className="container w-full min-h-full flex rounded-xl absolute shadow-lg">
          {questions
            ? random?.map((item, index) => {
                console.log(item);
                length--;
                return (
                  <Items
                    question={questions[item]}
                    index={index + 1}
                    z={length}
                    key={index}
                    show={showItem}
                  />
                );
              })
            : null}
          <Result />
        </div>
      </div>
    </div>
  );
};

export default Test;
