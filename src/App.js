import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

import { ProtectedRoute, PublicRoute } from "./router";
import { Login, SignUp, Dashboard } from "./screens";

const theme = createTheme();
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path={"/dashboard"} element={<Dashboard />} replace />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
