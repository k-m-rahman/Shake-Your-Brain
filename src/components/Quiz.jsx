import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Question from "./Question";

const Quiz = () => {
  const data = useLoaderData();
  const quizData = data.data;
  const { name, questions, total } = quizData;

  // for total correct answer calculation
  const [correctAns, setCorrectAns] = useState(0);
  const [wrongAns, setWrongAns] = useState(0);

  const shadowStyle = {
    boxShadow: "inset 0 0 6px  gray",
  };

  return (
    <div className="bg-teal-50  pb-8">
      <div className="  mx-2 lg:mx-5 md:mx-auto p-2">
        <h2 className="text-3xl text-cyan-700 font-semibold underline">
          Quiz of {name}
        </h2>

        <div className="grid gap-4 grid-cols-1 lg:grid-cols-12 ">
          <div className="flex flex-col gap-3 mt-8 lg:col-span-9 ">
            {questions.map((question, idx) => (
              <Question
                key={question.id}
                idx={idx}
                questionItem={question}
                setCorrectAns={setCorrectAns}
                setWrongAns={setWrongAns}
              ></Question>
            ))}
          </div>

          <div
            className="bg-zinc-100 p-3 md:w-1/2 lg:w-auto md:mx-auto lg:mx-0  lg:col-span-3 mt-8 rounded-lg mb-4"
            style={shadowStyle}
          >
            <div className="sticky top-20">
              <h1 className="text-xl font-semibold mb-2 underline">
                Mark Sheet
              </h1>
              <div className="text-lg font-medium flex flex-col gap-2 my-9  w-11/12 shadow-md border border-gray-300 rounded-lg p-4 mx-auto ">
                <h3 className="grid grid-cols-6  text-center lg:text-left">
                  {" "}
                  <span className="col-span-4  lg:col-span-5 ">
                    Total Questions :
                  </span>{" "}
                  <span className="ml-3">{total}</span>{" "}
                </h3>
                <h3 className="grid grid-cols-6  text-center lg:text-left">
                  {" "}
                  <span className="col-span-4  lg:col-span-5 ">
                    Correct Answers :
                  </span>{" "}
                  <span className="ml-3">{correctAns}</span>{" "}
                </h3>
                <h3 className="grid grid-cols-6  text-center lg:text-left">
                  {" "}
                  <span className="col-span-4  lg:col-span-5 ">
                    Wrong Answers :
                  </span>{" "}
                  <span className="ml-3">{wrongAns}</span>{" "}
                </h3>
                <h3 className="grid grid-cols-6  text-center lg:text-left">
                  {" "}
                  <span className="col-span-4  lg:col-span-5 ">
                    Remaining :
                  </span>{" "}
                  <span className="ml-3">{total - correctAns - wrongAns}</span>{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
