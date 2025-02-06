import React from "react"
import IRoute from "../core/objects/IRoute"

//! Pages
const DashboardPage = React.lazy(() => import("../pages/Dashboard"))
const ProfilePage = React.lazy(() => import("../pages/Profile"))

//TODO Router Table
const routes: IRoute[] = [
  {
    path: "",
    name: "App",
    redirect: "/menu-1",
    hidden: true,
  },
  {
    path: "/menu-1",
    name: "Menu 1",
    exact: true,
    icon: "AndroidOutlined",
    component: DashboardPage,
  },
  {
    path: "/menu-2",
    name: "Menu 2",
    exact: true,
    icon: "AppleOutlined",
    redirect: "/menu-2-1",
    children: [
      {
        path: "/menu-2-1",
        name: "Demo 2-1",
        exact: true,
        component: DashboardPage,
      },
      {
        path: "/menu-2-2",
        name: "Demo 2-2",
        exact: true,
        redirect: "/menu-2-2-1",
        component: DashboardPage,
        children: [
          {
            path: "/menu-2-2-1",
            name: "Demo 2-2-1",
            exact: true,
            component: DashboardPage,
            hidden: true,
          },
          {
            path: "/menu-2-2-2",
            name: "Demo 2-2-2",
            exact: true,
            component: DashboardPage,
            hidden: true,
          },
        ],
      },
    ],
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfilePage,
    hidden: true,
  },
]

export default routes
