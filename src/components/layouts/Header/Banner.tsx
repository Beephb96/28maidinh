import React, { ReactNode } from "react";
import { FacebookOutlined, PhoneOutlined, InstagramOutlined } from '@ant-design/icons';
import "../../../assets/styles/banner.css";
import backgourdImg from "../../../assets/img/banner.png";

const Banner = () => {
  return (
    <div className="bg">
      <img alt="banner" src={backgourdImg} />
      <div className="button-group">
        {actionButton("Facebook", <FacebookOutlined />)}
        {actionButton("Zalo", <PhoneOutlined />)}
        {actionButton("Instagram", <InstagramOutlined />)}
      </div>
    </div>
  );
};

const actionButton = (text: string, icon: ReactNode) => (
  <button className="action-btn">
    <div className="action-btn-inner">
      <div className="action-btn-front">{text}</div>
      <div className="action-btn-back">{icon}</div>
    </div>
  </button>
);

export default Banner;
