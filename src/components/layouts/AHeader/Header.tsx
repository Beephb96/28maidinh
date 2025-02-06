import React from 'react';
import { Row, Col, Tooltip, Typography, Space } from 'antd';
import { header } from '../../../data';
import { PhoneFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import "../../../assets/styles/head.less";
import logo from '../../../assets/img/Logo.png';
import "../../../assets/styles/home.less";


const { Title } = Typography;

export default function Header1() {
  const menuChild = header.map((item, i) => {
    const content = item.children.map((child, ii) => (
      <a href={child.link} key={ii.toString()} className="tip-block">
        {/* <span className="tip-img"><img src={child.img} alt="img" /></span> */}
        <div className="tip-content">
          {child.title}
          {/* <div>{child.desc}</div> */}
        </div>
      </a>
    ));
    return (
      <Col key={i.toString()} span={4}>
        <Tooltip title={content} placement="bottom" overlayClassName="header-tip-wrap">
          <span className="nav-title">{item.title}</span>
        </Tooltip>
      </Col>
    );
  });
  return (
      <>
      <header>
        <Row style={{ width: '100%', textAlign:'center', alignItems:'center'}}>
          <Col span={6} style={{backgroundColor:'#87CEFA'}}>    
          <img 
          src={logo} 
          alt="ISPACE ENGLISH" 
          style={{ maxWidth: '100%', height: 'auto' }}/>
          </Col>
          <Col span={12}><Title>CHÀO MỪNG ĐẾN VỚI ISPACE ENGLISH</Title></Col>
          <Col span={6}><Title level={2}><PhoneFilled />0900.000.000</Title></Col>
        </Row> 
      <Row className="nav">
      <Col span={4}>    
          <img 
          src={logo} 
          alt="ISPACE ENGLISH" 
          style={{ maxWidth: '100%', height: 'auto' }}/>
          </Col>
        {menuChild}
      </Row>
      </header>
      </>
  );
}