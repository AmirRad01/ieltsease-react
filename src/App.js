import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

// CSS

import "./App.css";

// CMPs
import Header from "./CMPs/Header";
import Footer from "./CMPs/Footer";

// Pages
import Archive from "./pages/Archive";
import Home from "./pages/Home";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Archive" element={<Archive />} />
          <Route path="/TestPage" element={<TestPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
