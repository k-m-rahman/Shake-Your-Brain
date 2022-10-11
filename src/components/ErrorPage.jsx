import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import errorAnimation from "../assets/95614-error-occurred.json";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <section className="flex flex-col items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="mb-4">
        <Lottie animationData={errorAnimation} loop={true}></Lottie>
      </div>

      <h1 className="text-2xl md:text-5xl font-semibold">
        Oops! An Error Ocurred!
      </h1>
      {error && (
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-7xl md:text-9xl text-gray-600">
              {error.status}
            </h2>
            <p className="text-2xl font-semibold md:text-3xl mb-8">
              {error.statusText || error.message}
            </p>
            <Link
              to="/"
              className="px-8 py-3 font-semibold rounded text-lg bg-cyan-300 hover:bg-cyan-400 text-gray-900"
            >
              Go to homepage
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default ErrorPage;
