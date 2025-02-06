import React from "react"
import { Statistic, Card, Row, Col } from "antd"
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons"

interface Props {}

const Dashboard = (props: Props) => {
  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Locations"
              value={11.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="Ventes"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard
