import React from 'react';
import logo from '../../../assets/img/Logo.png';
import "../../../assets/styles/head.less";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Menu, Row, Col, Button, Popover } from 'antd';

const searchEngine = 'Google';

interface HeaderProps {
  isFirstScreen: boolean;
  isMobile: boolean;
}

interface HeaderState {
  menuVisible: boolean;
  isScrolled: false; // Thêm state để theo dõi sự kiện cuộn
}

export default class Header extends React.Component<HeaderProps, HeaderState> {
  static propTypes = {
    isFirstScreen: PropTypes.bool.isRequired,
    isMobile: PropTypes.bool.isRequired,
  };

  state: HeaderState = {
    menuVisible: false,
  };

  onMenuVisibleChange = (visible: boolean) => {
    this.setState({
      menuVisible: visible,
    });
  };

  handleShowMenu = () => {
    this.setState({
      menuVisible: true,
    });
  };

  handleHideMenu = () => {
    this.setState({
      menuVisible: false,
    });
  };

  handleSelectFilter = (value: string, option: { props: { [x: string]: any; }; }) => {
    const optionValue = option.props['data-label'];
    return optionValue === searchEngine || optionValue.indexOf(value.toLowerCase()) > -1;
  };

  render() {
    const { isFirstScreen, isMobile } = this.props;
    const { menuVisible } = this.state;
    const menuMode = isMobile ? 'inline' : 'horizontal';
    const headerClassName = classNames({
      clearfix: true,
      'home-nav-white': !isFirstScreen,
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
        {menuMode === 'inline' && (
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            open={menuVisible}
            arrowPointAtCenter
            onOpenChange={this.onMenuVisibleChange}
          />
        )}
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
