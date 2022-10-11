import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Friends from "./components/Friends/Friends";
import Posts from "./components/Posts/Posts.js";
import Main from "./layout/Main";
import Home from "./components/Home/Home";
import FriendDetails from "./components/FriendDetails/FriendDetails";
import PostDetails from "./components/PostDetails/PostDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/products",
          element: <Products></Products>,
        },
        {
          path: "/friends",
          loader: () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          element: <Friends></Friends>,
        },
        {
          path: "/friends/:friendid",
          loader: ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.friendid}`
            );
          },
          element: <FriendDetails></FriendDetails>,
        },
        {
          path: "/post",
          loader: () => {
            return fetch("https://jsonplaceholder.typicode.com/posts");
          },
          element: <Posts></Posts>,
        },
        {
          path: "/post/:postid",
          loader: ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/posts/${params.postid}`
            );
          },
          element: <PostDetails></PostDetails>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
