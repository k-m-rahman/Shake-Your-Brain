import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { name, description, picture } = blog;

  return (
    <div>
      <Card imgSrc={picture}>
        <h5 className="text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="font-normal text-justify text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </Card>
    </div>
  );
};

export default Blog;
