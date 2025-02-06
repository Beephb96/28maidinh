import React from "react"
import { UserOutlined } from "@ant-design/icons"
import { Avatar, Dropdown, Layout, Menu } from "antd"
import { logout } from "../../../core/objects/Auth"
import { Link } from "react-router-dom"
const { Header } = Layout

interface Props {}

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link to="/admin/profile">Profile</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="99999" onClick={() => logout()}>
      Logout
    </Menu.Item>
  </Menu>
)

const AHeader = (props: Props) => {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <div className="h-full grid grid-cols-5 md:grid-cols-12 p-0 shadow-sm">
        <div className="w-20 flex col-start-12 h-full">
          <Dropdown overlay={menu} trigger={["click", "hover"]}>
            <a
              className="ant-dropdown-link ml-6"
              onClick={(e) => e.preventDefault()}
            >
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                className="text-center"
                icon={<UserOutlined className="text-lg" />}
              />
            </a>
          </Dropdown>
        </div>
      </div>
    </Header>
  )
}

export default AHeader
