import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/home";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};