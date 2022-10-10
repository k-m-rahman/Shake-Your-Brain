import React, { useContext } from "react";
import { TopicsContext } from "./Root";
import Topic from "./Topic";

const Topics = () => {
  const topics = useContext(TopicsContext);

  console.log(topics);
  return (
    <div>
      <h1>Number of topics {topics.length}</h1>
      <div>
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Topics;
