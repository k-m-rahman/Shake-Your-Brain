import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./Header";

export const TopicsContext = createContext([]);

const Root = () => {
  const topicsData = useLoaderData();
  const topics = topicsData.data;
  return (
    <TopicsContext.Provider value={topics}>
      <div>
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </TopicsContext.Provider>
  );
};

export default Root;
