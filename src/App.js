/*eslint-disable*/
import React, { Component } from "react";
import "./App.scss";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";
import ThemeContext from './views/context/TheamContainer';
import { validateTokenAction } from "./store/actions";

class App extends Component {
  componentWillMount(){
    this.props.validateToken();
  }
  render(){
    console.log("isValidateToken", this.props.isValidateToken);
    return (
      <div className="App">
        { this.props.isValidateToken ?
          <h1>loading</h1>
            :
            <>
            <Router>
          <ThemeContext>
          <Header user={this.props.user} />
              <Main />
          </ThemeContext>
          <Footer />
          </Router>
          </>
        }
      </div>
    );
  }
}

const mapStateToProps = store => ({
  user: store.auth.user,
  isValidateToken: store.auth.isValidateToken,
})

const mapDispatchToProps =  {
  validateToken: validateTokenAction
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
