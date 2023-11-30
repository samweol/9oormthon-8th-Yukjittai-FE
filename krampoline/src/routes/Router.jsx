import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from "../App";
import Test from "../pages/Test";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}
