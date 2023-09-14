import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Protected from "./Protected";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<Protected />}>
          <Route element={<Dashboard />} path="/dashboard" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
