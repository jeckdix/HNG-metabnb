import React from "react";
import { Routes, Route } from "react-router";
import { Home } from "./pages/home";
import { Wrapper as PageWrapper } from "./components/container";

const App = () => {
  return (
    <PageWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </PageWrapper>
  );
};

export default App;
