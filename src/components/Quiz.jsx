import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "./Question";

const Quiz = () => {
  const data = useLoaderData();
  const quizData = data.data;

  const { name, questions, total } = quizData;
  return (
    <div className="bg-teal-50  pb-8">
      <div className=" md:w-4/5 mx-2 md:mx-auto p-2">
        <h2 className="text-3xl text-cyan-700 font-semibold underline">
          Quiz of {name}
        </h2>

        <div className="flex flex-col gap-3 mt-8">
          {questions.map((question, idx) => (
            <Question
              key={question.id}
              idx={idx}
              questionItem={question}
            ></Question>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
