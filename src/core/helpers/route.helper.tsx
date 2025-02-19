import React from "react";
import { Navigate, Route } from "react-router-dom";
import { isConnectedUser } from "../objects/Auth";
import IRoute from "../objects/IRoute";

export const createRoute = (route: IRoute, ind: number, parent: string = "") => {
  return (
    <React.Fragment key={`fragment-${ind}`}>
      {/* Xử lý điều hướng nếu có `redirect` */}
      {route.redirect && route.redirect.length > 0 && (
        <Route
          key={`redirect-${ind}`}
          path={`${parent}${route.path}`}
          element={<Navigate to={`${parent}${route.path}${route.redirect}`} replace />}
        />
      )}

      {/* Nếu có `children`, tạo các route con */}
      {route.children &&
        route.children.map((iRoute, idx) => createRoute(iRoute, idx, `${parent}${route.path}`))}

      {/* Nếu có `component`, tạo route bình thường */}
      {route.component && (
        <Route key={ind} path={`${parent}${route.path}`} element={<route.component />} />
      )}
    </React.Fragment>
  );
};

export const createProtectedRoute = (route: IRoute, ind: number, parent: string = "") => {
  if (!isConnectedUser()) {
    return (
      <Route
        key={`protected-${ind}`}
        path={`${parent}${route.path}`}
        element={<Navigate to="/401" replace />}
      />
    );
  }
  return createRoute(route, ind, parent);
};
