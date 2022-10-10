import React, { useContext } from "react";
import { TopicsContext } from "./Root";
import Topic from "./Topic";

const Topics = () => {
  const topics = useContext(TopicsContext);

  console.log(topics);
  return (
    <div className="bg-zinc-300 lg:h-[100vh]">
      <h1>Number of topics {topics.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-5 my-8">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Topics;
