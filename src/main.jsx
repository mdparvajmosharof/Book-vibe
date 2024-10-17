import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import ListedBooks from "./Components/LIstedBooks/ListedBooks";
import PagesToRead from "./Components/PagesToRead/PagesToRead";
import ErrorPage from "./ErrorPage/ErrorPage";
import BookDetails from "./Components/BookDetails/BookDetails";
import BookList from "./Components/BookList/BookList";
import Wishlist from "./Components/Wishlist/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Listed-books",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("/books.json"),
        children: [
          {
            path: 'book',
            index: true,
            element: <BookList></BookList>,
          },
          {
            path: "wishlist",
            element: <Wishlist></Wishlist>,
          },
        ],
      },
      {
        path: "/Pages-to-read",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("books.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
