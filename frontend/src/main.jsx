import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import Browse from "./Browse.jsx";
import Forum from "./Forum.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Browse" element={<Browse />} />
        <Route path="/Forum" element={<Forum />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
