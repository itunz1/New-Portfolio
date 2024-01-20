"use client"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import Home from "./components/Home/Home.js";


function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
