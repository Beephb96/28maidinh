import React from 'react';
import logo from '../../../assets/img/Logo.png';
import "../../../assets/styles/head.less";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Menu, Row, Col, Button} from 'antd';

const searchEngine = 'Google';

interface HeaderState {
  menuVisible: boolean;
  isScrolled: boolean;
}

export default class Header extends React.Component<{},HeaderState> {
  state: HeaderState = {
    menuVisible: false,
    isScrolled: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 100) {
      this.setState({ isScrolled: true });
    } else {
      this.setState({ isScrolled: false });
    }
  };

  onMenuVisibleChange = (visible: boolean) => {
    this.setState({ menuVisible: visible });
  };

  handleShowMenu = () => {
    this.setState({ menuVisible: true });
  };

  handleHideMenu = () => {
    this.setState({ menuVisible: false });
  };

  render() {
    const { menuVisible, isScrolled } = this.state;
    const menuMode = 'horizontal';

    const headerClassName = classNames({
      clearfix: true,
      'home-nav-white': isScrolled,
    });

    const menu = [
      <Button className="header-lang-button" ghost size="small" key="lang">
        English
      </Button>,
      <Menu mode={menuMode} defaultSelectedKeys={['home']} id="nav" key="nav">
        <Menu.Item key="home">Trang chủ</Menu.Item>
        <Menu.Item key="about">Giới thiệu</Menu.Item>
        <Menu.Item key="docs/spec">Dịch vụ</Menu.Item>
        <Menu.Item key="docs/react">Dự án nổi bật</Menu.Item>
        <Menu.Item key="docs/pattern">Blog</Menu.Item>
        <Menu.Item key="docs/resource">Liên hệ</Menu.Item>
        <Menu.Item key="pro">
          <a href="/Page1" className="header-link" target="_blank" rel="noopener noreferrer">
            PRO
            <span style={{ display: 'inline-block', position: 'relative', top: -2, width: 18 }}></span>
          </a>
        </Menu.Item>
      </Menu>,
    ];

    return (
      <header id="header" className={headerClassName}>
        {/* {menuMode === 'inline' && (
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            open={menuVisible}
            arrowPointAtCenter
            onOpenChange={this.onMenuVisibleChange}
          />
        )} */}
        <Row>
          <Col lg={4} md={5} sm={24} xs={24}>
            <a id="logo">
              <img alt="logo" src={logo} />
              <span>Technology</span>
            </a>
          </Col>
          <Col lg={20} md={19} sm={0} xs={0}>
            {menuMode === 'horizontal' && menu}
          </Col>
        </Row>
      </header>
    );
  }
}
