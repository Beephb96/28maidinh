import React from "react"
import ReactDOM from "react-dom"

import "antd/dist/antd.css"
import Header1 from "./components/layouts/Header"
import Banner from "./components/layouts/Header/Banner"
import Test from "./Test"
import { Provider } from "react-redux";
import { store } from "./redux/store";
import TestRedux from "./TestRedux"
import Home from "./components/layouts/Home"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <Header1 />
    <Banner />
    <Test />
    <TestRedux />
    </Provider> */}
    <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
)
  