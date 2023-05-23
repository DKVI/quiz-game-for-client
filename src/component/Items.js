/** @format */

import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { INCREASE_SCORES, Z_INDEX_ITEMS } from "../redux/actions";
const correct = "w-full h-[120px] border-green-400 border-[5px]";
const wrong = "w-full h-[120px] border-red-400 border-[5px]";
const normal = "w-full h-[120px] border-purple-400 border-[5px]";
const Items = ({ question, index, z, show }) => {
  const correct = question.correct;
  const [color, setColor] = useState(normal);
  const dispatch = useDispatch();
  const scores = useSelector((state) => state.scores);
  let checkCorrect = (answers) => {
    switch (answers) {
      case "A":
        return 0;
      case "B":
        return 1;
      case "C":
        return 2;
      case "D":
        return 3;
    }
  };

  const handleClick = (e, id) => {
    const item = document.querySelector(".items");
    const answers = document.querySelectorAll(".answers");
    console.log(answers);
    console.log(e.target);
    e.target.className = "";
    if (correct === id) {
      dispatch(INCREASE_SCORES(scores + 1));
      e.target.classList.add(
        "answers",
        "w-full",
        "h-[120px]",
        "border-green-400",
        "border-[5px]",
        "text-green-400",
        "p-[10px]"
      );
    } else {
      e.target.classList.add(
        "answers",
        "w-full",
        "h-[120px]",
        "border-red-400",
        "border-[5px]",
        "text-red-400",
        "text-red-400",
        "p-[10px]"
      );
      answers[checkCorrect(correct)].className = "";
      answers[checkCorrect(correct)].classList.add(
        "answers",
        "w-full",
        "h-[120px]",
        "border-green-400",
        "border-[5px]",
        "text-green-400",
        "p-[10px]"
      );
    }
    setTimeout(() => {
      item.remove();
      dispatch(Z_INDEX_ITEMS(index + 1));
    }, 700);
  };

  return (
    <div
      className="items w-full h-full bg-white flex flex-col justify-between rounded-xl flex-none absolute left-0 bottom-0 max-h-[120%]"
      style={{
        zIndex: z,
        display: show === index ? "flex" : "none",
      }}
    >
      <div className="w-full h-[40%] flex-none border rounded-lg shadow-2xl p-[20px] relative flex justify-end  flex-col">
        <div className="w-full text-[16px]">
          {" "}
          {"Câu " + index + ": "} {question.name}
        </div>
      </div>
      <div className="w-full h-[60%] flex flex-col gap-[20px] mt-5">
        {question.answers.map((item, index) => (
          <div
            key={item.id}
            id={item.id}
            className="w-full h-[120px] border-purple-400 border-[5px] answers p-[10px]"
            style={{
              fontSize: "12px",
              backgroundColor: "white",
            }}
            onClick={(e) => handleClick(e, item.id)}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Items);
