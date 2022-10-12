import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs";
import ErrorPage from "../components/ErrorPage";
import Quiz from "../components/Quiz";
import Root from "../components/Root";
import Statistics from "../components/Statistics";
import Topics from "../components/Topics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
    children: [
      {
        path: "/",
        element: <Topics></Topics>,
      },
      {
        path: "topics",
        element: <Topics></Topics>,
      },
      {
        path: "/topic/:id",
        element: <Quiz></Quiz>,
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () =>
          fetch("https://mocki.io/v1/66962ac5-545d-4484-a576-97b92a7233c7"),
        // fetch("blogs.json"),
      },
    ],
  },
]);
