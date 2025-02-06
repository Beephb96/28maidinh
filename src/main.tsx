import React from "react"
import ReactDOM from "react-dom"
//import "./assets/styles/index.scss"
import "antd/dist/antd.css"
import Header1 from "./components/layouts/AHeader/Header"
import Banner from "./components/layouts/AHeader/Banner"
import Test from "./Test"

ReactDOM.render(
  <React.StrictMode>
    <Header1 />
    {/* <Banner /> */}
    <Test />
  </React.StrictMode>,
  document.getElementById("root"),
)
  