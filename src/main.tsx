import React from "react";
import ReactDOM from "react-dom";
// import "./assets/styles/index.scss"
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Auth/Login";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
