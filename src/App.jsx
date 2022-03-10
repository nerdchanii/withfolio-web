import "./App.css";
import React from "react";
import NavigateBar from "./Components/NavigateBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <NavigateBar />
      <Outlet />
    </div>
  );
}

export default App;
