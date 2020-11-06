/*eslint-disable*/

import React from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";
import ThemeContext from './views/context/TheamContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeContext>
        <Header />
          <Main />
        </ThemeContext>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
