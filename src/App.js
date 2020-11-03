import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
