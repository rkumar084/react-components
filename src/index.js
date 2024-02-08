//import React from "react";
import ReactDOM from "react-dom/client";
import BookOpsApp from "./BookOpsApp";
import { Provider } from "./context/booksContext";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <Provider>
    <BookOpsApp />
  </Provider>
);
