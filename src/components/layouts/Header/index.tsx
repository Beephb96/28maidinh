import React, { useState, useEffect, useCallback } from "react";
import logoLight from "../../../assets/img/LogoLight.png";
import logoDark from "../../../assets/img/LogoDark.png";
import "../../../assets/styles/head.less";
import classNames from "classnames";
import { Menu, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = useCallback((e: { key: string }) => {
    navigate(e.key);
  }, [navigate]);

  const menuItems = [
    { key: "/", label: "Trang chủ" },
    { key: "/login", label: "Giới thiệu" },
    { key: "/404", label: "Dịch vụ" },
    { key: "/403", label: "Dự án nổi bật" },
    { key: "/blog", label: "Blog" },
    { key: "/contact", label: "Liên hệ" }
  ];

  return (
    <header id="header" className={classNames({ clearfix: true, "home-nav-white": isScrolled })}>
      <Row>
        <Col lg={4} md={5} sm={10} xs={14}>
          <a id="logo">
          <img alt="logo" src={isScrolled ? logoDark : logoLight} />
          </a>
        </Col>
        <Col lg={20} md={19} sm={14} xs={10}>
          <Menu mode="horizontal" id="nav" onClick={handleMenuClick} items={menuItems} />
        </Col>
      </Row>
    </header>
  );
};

export default Header;
