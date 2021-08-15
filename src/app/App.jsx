import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { Footer } from "./Components/Footer";

export const App = () => {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
};
