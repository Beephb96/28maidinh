import React, { Suspense } from "react";
import "./index.scss";
import { Layout } from "antd";
import { Route, Routes} from "react-router-dom";
import routes from "../../routes/default-nav";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import LoadingComponent from "../../components/Spinloading";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout className="site-layout">
      <Header />
      <Content>
        <Suspense fallback={<LoadingComponent />}>
          <Routes>
            {routes.map((route, idx) => (
              <Route key={idx} path={route.path} element={<route.component />} />
            ))}
          </Routes>
        </Suspense>
      </Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;
