import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import Browse from "./Browse.jsx";
import Forum from "./Forum.jsx";
import Session from "./Session.jsx";
import Profile from "./Profile.jsx";
import Settings from "./Settings.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Browse" element={<Browse />} />
        <Route path="/Forum" element={<Forum />} />
        <Route path="/Session" element={<Session />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
