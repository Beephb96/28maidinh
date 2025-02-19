import React, { useState, useEffect } from 'react';
import logo from '../../../assets/img/Logo.png';
import "../../../assets/styles/head.less";
import classNames from 'classnames';
import { Menu, Row, Col, Button} from 'antd';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (e: any) => {
    navigate(e.key);
  };

  return (
    <header id="header" className={classNames({ clearfix: true, 'home-nav-white': isScrolled })}>
      <Row>
        <Col lg={4} md={5} sm={10} xs={14}>
          <a id="logo">
            <img alt="logo" src={logo} />
            <span> </span>
          </a>
        </Col>
        <Col lg={20} md={19} sm={14} xs={10}>
          <Menu mode="horizontal" defaultSelectedKeys={['/']} id="nav" onClick={handleMenuClick}>
            <Menu.Item key="/">Trang chủ</Menu.Item>
            <Menu.Item key="/login">Giới thiệu</Menu.Item>
            <Menu.Item key="/404">Dịch vụ</Menu.Item>
            <Menu.Item key="/403">Dự án nổi bật</Menu.Item>
            <Menu.Item key="/blog">Blog</Menu.Item>
            <Menu.Item key="/contact">Liên hệ</Menu.Item>
          </Menu>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
