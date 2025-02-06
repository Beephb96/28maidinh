import React, { Suspense } from "react"
import "./index.scss"
import { Button, Layout } from "antd"
import AContent from "../../components/layouts/AContent"
import AHeader from "../../components/layouts/AHeader"
import ASidebar from "../../components/layouts/ASidebar"
import { createProtectedRoute } from "../../core/helpers/route.helper"
import { Redirect, Switch } from "react-router-dom"
import routes from "../../routes/page-nav"
import { createMenu } from "../../core/helpers/menu.helper"

const { Footer } = Layout

interface Props {}

const MainLayout = (props: Props) => {
  return (
    <Layout>
      <ASidebar icon="VXS Admin">
        {routes.map((route, idx) => createMenu(route, idx, "/admin"))}
      </ASidebar>

      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <AHeader />
        <AContent>
          <Suspense fallback={"lorem"}>
            <Switch>
              {routes.map((route, idx) => {
                return createProtectedRoute(route, idx, "/admin")
              })}
              <Redirect to="/404" />
            </Switch>
          </Suspense>
        </AContent>

        <Footer style={{ textAlign: "center" }}>
          VXS Admin &copy;{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  )
}

export default MainLayout
