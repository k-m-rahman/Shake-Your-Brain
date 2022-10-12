import React, { useState } from "react";
import Option from "./Option";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";

const Question = ({ questionItem, idx, setCorrectAns }) => {
  const { correctAnswer, options, question } = questionItem;

  // correct answer can be clicked only once
  const [correctAnsClicked, setCorrectAnsClicked] = useState(false);

  // removing the html tags and spaces
  let questionText = question.replace(/(<([^>]+)>)/gi, "");
  let questionText2 = questionText.replace(/\&nbsp;/g, " ");

  // throwing a toast on answer clicking
  const handleCorrectAnswer = (option, e) => {
    if (option === correctAnswer) {
      toast.success("Correct Answer!", { autoClose: 800 });

      if (correctAnsClicked === false) {
        setCorrectAnsClicked(true);
        setCorrectAns((prev) => prev + 1); // total correct answer calculation
      }
    } else {
      toast.error(`Wrong Answer, Please Try Again.`, { autoClose: 800 });

      if (correctAnsClicked === true) {
        setCorrectAnsClicked(false);
        setCorrectAns((prev) => prev - 1);
      }
    }
  };

  // showing correct answer by a modal
  const showCorrectAnswer = () => {
    swal("Correct Answer :", `${correctAnswer}`, {
      button: "Close",
      dangerMode: true,
    });
  };

  return (
    <div className="shadow-lg bg-white p-4 rounded-lg mb-4">
      <div className="grid grid-cols-1 md:grid-cols-12  p-3">
        <p className="md:col-span-11 px-5 text-xl font-semibold">
          Quiz {idx + 1} : {questionText2}
        </p>

        <button
          onClick={showCorrectAnswer}
          className="mt-4 md:mt-0  w-min mx-auto"
        >
          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
        </button>
      </div>

      <div
        id="checkbox"
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-3 mt-10"
      >
        {options.map((option, idx) => (
          <Option
            key={idx}
            option={option}
            handleCorrectAnswer={handleCorrectAnswer}
            question={question}
          ></Option>
        ))}
      </div>
    </div>
  );
};

export default Question;
