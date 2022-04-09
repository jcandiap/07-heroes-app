import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />

        <Route path="/*" element={ 
          <PrivateRoute>
            <DashboardRoutes />
          </PrivateRoute> 
        }
        />
        {/* <Route path="/*" element={ <DashboardRoutes /> } /> */}
      </Routes>
    </div>
  );
};
