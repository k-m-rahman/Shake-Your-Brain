import React from "react";
import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";

const Blogs = () => {
  const blogs = useLoaderData();

  return (
    <div className="p-5 bg-cyan-50 md:h-[100vh]">
      <h2 className="text-3xl font-semibold underline">Recent Blogs</h2>

      <div className=" grid grid-cols-1  gap-8 mt-8 lg:w-7/12 mx-auto">
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
