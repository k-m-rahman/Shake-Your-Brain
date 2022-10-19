import { Radio } from "flowbite-react";
import React, { useState } from "react";

const Option = ({ option, handleCorrectAnswer, question, correctAnswer }) => {
  const [rightOrWrong, setRightOrWrong] = useState("");

  const labelStyle = {
    boxShadow: "0 0 5px #c7c6c6",
    // backgroundColor: isHovering ? "#eaffff" : "",
    backGroundColor: { rightOrWrong },
  };

  const labelClicked = (e) => {
    if (e.target.tagName === "INPUT") {
      // if (option === correctAnswer) {
      //   setRightOrWrong("bg-green-200");
      // } else {
      //   setRightOrWrong("bg-red-300");
      // }

      const childs =
        e.target.parentElement.parentElement.parentElement.childNodes;

      if (option === correctAnswer) {
        for (let child of childs) {
          if (child === e.target.parentElement.parentElement) {
            child.classList.add("bg-green-200");
          } else {
            child.classList.remove("bg-red-200");
          }
        }
      } else {
        for (let child of childs) {
          if (child === e.target.parentElement.parentElement) {
            child.classList.add("bg-red-200");
          } else {
            child.classList.remove("bg-red-200");
            child.classList.remove("bg-green-200");
          }
        }
      }
    }
  };

  return (
    <label
      onClick={(e) => labelClicked(e)}
      htmlFor={option}
      style={labelStyle}
      className={`flex items-start gap-2 border-2 border-teal-500 rounded-md p-2 hover:bg-green-100 ${rightOrWrong}`}
    >
      <span>
        <Radio
          onClick={() => handleCorrectAnswer(option)}
          id={option}
          name={question}
        />
      </span>
      <span className=" text-left pl-1">{option}</span>
    </label>
  );
};

export default Option;
