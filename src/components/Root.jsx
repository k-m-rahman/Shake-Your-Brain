import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const TopicsContext = createContext([]);

const Root = () => {
  const topicsData = useLoaderData();
  const topics = topicsData.data;
  return (
    <TopicsContext.Provider value={topics}>
      <div>
        <Header></Header>
        <Outlet></Outlet>
        <ToastContainer position="top-center"></ToastContainer>
      </div>
    </TopicsContext.Provider>
  );
};

export default Root;
