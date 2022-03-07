import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import CounterPage from "../pages/CounterPage";
import TempConverterPage from "../pages/TempConverterPage";
import FlightBookerPage from "../pages/FlightBookerPage";

const Routing = (_) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/counter" element={<CounterPage />} />
      <Route path="/temp-converter" element={<TempConverterPage />} />
      <Route path="/flight-booker" element={<FlightBookerPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default Routing;
