import React, { Suspense, useEffect, useState } from "react";
import "./index.scss";
import { Layout } from "antd";
import { createProtectedRoute } from "../../core/helpers/route.helper";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import routes from "../../routes/default-nav";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import LoadingComponent from "../../components/Spinloading";
import Home from "../../pages/Home"; 
import Login from "../../pages/Auth/Login";

const { Content } = Layout;

const MainLayout = () => {
  const location = useLocation(); // Lấy thông tin route hiện tại
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]); // Khi pathname thay đổi, cập nhật state

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
