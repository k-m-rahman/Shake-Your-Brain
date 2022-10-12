import React, { useContext } from "react";
import { TopicsContext } from "./Root";
import Slider from "./Slider";
import Topic from "./Topic";

const Topics = () => {
  const topics = useContext(TopicsContext);

  return (
    <div className="bg-zinc-200 pb-8 pt-3">
      <Slider></Slider>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-5 mt-8">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Topics;
