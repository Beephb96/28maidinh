import { Spin, Row, Col } from "antd";
import React from "react";

const LoadingComponent = () => {
  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col>
        <Spin size="large" />
      </Col>
    </Row>
  );
};

export default LoadingComponent;
