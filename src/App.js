import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import PageWrapper  from "./components/PageWrapper/PageWrapper";
import PlaceToStay from "./pages/PlaceToStay";

const App = () => {
  return (
    <PageWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place-to-stay" element={<PlaceToStay />} />
      </Routes>
    </PageWrapper>
  );
};

export default App;
