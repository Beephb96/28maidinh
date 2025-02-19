import React from 'react';
import { Row, Col } from 'antd';
import "../../../assets/styles/footer.less";
import logo from '../../../assets/img/Logo.png';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
      <Row gutter={[16, 16]}>
          <Col lg={6} sm={12} xs={12}>
            <div className="footer-center">
              <h2>HELLO</h2>
              <div>
                <a target="_blank " href="https://github.com/ant-design/ant-design">
                  GitHub
                </a>
              </div>
              <div>
                <a href="http://pro.ant.design">Ant Design Pro</a>
              </div>
              <div>
                <a href="http://ng.ant.design">NG-ZORRO</a>
                <span> - </span>
                Ant Design of Angular
              </div>
            </div>
          </Col>
          <Col lg={6} sm={12} xs={12}>
            <div className="footer-center">
              <h2>A DIU Ô CÊ</h2>
              <div>
                <a href="http://scaffold.ant.design">NÔ ÔCÊ</a>
                <span> - </span>
                ĐÉO OCE
              </div>
            </div>
          </Col>
          <Col lg={6} sm={12} xs={12}>
            <div className="footer-center">
              <h2>XIN CHÀO</h2>
              <div>
                <a href="/changelog">
                  Chào cc
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={12} xs={12}>
            <div className="footer-center">
              <h2>
                <img className="title-icon" src={logo} alt="" />
                Liên hệ
              </h2>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://antv.alipay.com/">
                TÊ LÊ PHÔN
                </a>
                <span> - </span>
                SỐ ĐIỆN THOẠI
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://eggjs.org/">
                PHÂY BÚC
                </a>
                <span> - </span>
                FACEBOOK
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={4} sm={24} />
        <Col lg={20} sm={24}>
          <span
            style={{
              lineHeight: '16px', paddingRight: 12, marginRight: 11, borderRight: '1px solid rgba(255, 255, 255, 0.55)',
            }}
          >
            <a
              href="https://docs.alipay.com/policies/privacy/antfin"
              rel="noopener noreferrer"
              target="_blank"
            >
              a
            </a>
          </span>
          <span style={{ marginRight: 24 }}>
            <a
              href="https://render.alipay.com/p/f/fd-izto3cem/index.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              b
            </a>
          </span>
          <span style={{ marginRight: 12 }}>VXS TECHNOLOGY</span>
          <span style={{ marginRight: 12 }}>Copyright © {new Date().getFullYear()}</span>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
