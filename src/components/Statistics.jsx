import React, { useContext } from "react";
import Barchart from "./Barchart";
import Linechart from "./Linechart";
import { TopicsContext } from "./Root";

const Statistics = () => {
  const topics = useContext(TopicsContext);

  return (
    <div>
      <h2 className="my-8 text-xl md:text-2xl mx-5 lg:text-3xl font-bold">
        The statistics of total number of quiz in each subject are displayed
        below.
      </h2>

      <h3 className="text-lg md:text-2xl font-semibold mb-5">Line Chart :</h3>
      <div className="w-10/12 lg:w-2/3 md:mx-auto my-5">
        <Linechart topics={topics}></Linechart>
      </div>

      <h3 className="text-lg md:text-2xl font-semibold mb-5">Bar Chart :</h3>
      <div className="w-10/12 lg:w-2/3 md:mx-auto my-5">
        <Barchart topics={topics}></Barchart>
      </div>
    </div>
  );
};

export default Statistics;
