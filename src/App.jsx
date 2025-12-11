import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Error />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
