import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../components/Home/Home";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Recipes from "../../layout/Recipes";
import Recipe from "../../components/pages/Recipe";
import LoginLayout from "../../layout/LoginLayout";
import Login from "../../components/pages/Login";
import Register from "../../components/pages/Register";
import Terms from "../../components/pages/Terms";
import Blog from "../../components/pages/Blog";
import PrivateRoute from "../privateRoute/PrivateRoute";
import About from "../../components/pages/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/",
    element: <LoginLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/"></Navigate>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
    ],
  },
  {
    path: "/recipes",
    element: <Recipes />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <Recipe />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://the-bengal-chef-server-saroar-git.vercel.app/recipes/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
