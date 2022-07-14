import "./App.css";
import React from "react";
import NavigateBar from "./Components/NavigateBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div> root</div>} />
          <Route path="/home" element={<div>home</div>} />
          <Route path="/about" element={<div>about</div>} />
          <Route path="*" element={<h1>NOT FOUND PAGE</h1>} />
        </Routes>
        <NavigateBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
