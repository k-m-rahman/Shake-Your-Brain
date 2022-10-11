import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
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
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "/topic/:id",
        element: <Quiz></Quiz>,
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
      },
    ],
  },
]);
