import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage";
import Grid from "./game";
 
const App = () => {
   
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} /> {/* ✅ Correct Route */}
      <Route path="/game" element={<Grid/>} /> {/* ✅ Correct Route */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} /> {/* ✅ Catch-all Route */}
    </Routes>
    </BrowserRouter>
  );
};

export default App;
