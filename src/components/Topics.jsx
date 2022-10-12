import React, { useContext } from "react";
import { TopicsContext } from "./Root";
import Slider from "./Slider";
import Topic from "./Topic";

const Topics = () => {
  const topics = useContext(TopicsContext);

  return (
    <div>
      <div className="bg-zinc-200  py-3">
        <Slider></Slider>
      </div>

      <div className="bg-zinc-100 px-2 py-10">
        <h2 className="text-3xl font-bold mt-10 underline italic">
          Test yourself in these {topics.length} topics.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-5 mt-8">
          {topics.map((topic) => (
            <Topic key={topic.id} topic={topic}></Topic>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;
