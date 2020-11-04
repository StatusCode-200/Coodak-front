/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import React from "react";
import base64 from "base-64";
import jwt from "jsonwebtoken";
import cookie from "react-cookies";

export const AuthContext = React.createContext();

const API = "https://coodak-api.herokuapp.com/users";

class AuthProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      login: this.login,
      signUp: this.signUp,
      logout: this.logout,
      user: {},
      isValidAction: this.isValidAction,
    };
  }

  componentDidMount() {
    console.log("in did mount >>>>");
    // get the cookie -> validate cookie -> of valid -> update the state
    const cookieToken = cookie.load("auth");
    const token = cookieToken || null;
    this.validateToken(token);
  }

    isValidAction = (action) => {
      const actions = {
        admin: ["edit", "delete", "read"],
        user: ["read"],
        editor: ["edit", "read"],
      };

      // "users":{
      //   "user": ["read"],
      //   "admin":  ["read", "create", "update", "delete", "list"],
      // },
      // "challenges": {
      //   "user": ["read"],
      //   "admin":  ["read", "create", "update", "delete"],
      // },
      // "userChallenges": {
      //   "user":  ["read", "create", "update", "delete"],
      //   "admin":  ["read", "create", "update", "delete"],
      // },
      // "challengeComments": {
      //   "user":  ["read", "create", "update", "delete"],
      //   "admin":  ["read", "create", "update", "delete"],
      // },

      const { role } = this.state.user.user;
      console.log("role : ", role);
      console.log("actions[role].includes(action): ", actions[role].includes(action));
      return actions[role].includes(action);
    }

    login = async (username, password) => {
      try {
        const encodedData = base64.encode(`${username}:${password}`);
        const result = await fetch(`${API}/signin`, {
          method: "post",
          mode: "cors",
          cache: "no-cache",
          headers: { Authorization: `Basic ${encodedData}` },
        });
        const res = await result.json();
        console.log("res: ", res);
        const { token } = res;
        localStorage.setItem("token", token);
        this.validateToken(res.token);
      } catch (e) {
        console.log("error : ", e);
      }
    }

    signUp = async (username, password, role) => {
      try {
        const result = await fetch(`${API}/signup`, {
          method: "post",
          mode: "cors",
          cache: "no-cache",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password, role }),
        });
        const res = await result.json();
        // console.log("res: ", res)
        this.validateToken(res.token);
      } catch (e) {
        console.log("error : ", e);
      }
    }

    validateToken = (token) => {
      // console.log("token >>> ", token)
      const user = jwt.decode(token);

      if (user) {
        this.setAuthState(true, token, user); // to set cookie and update state.
      }
    }

    setAuthState = (loggedIn, token, user) => {
      cookie.save("auth", token); // save token as a cookie in browser
      // update conext with user object
      this.setState({ loggedIn, user });
    }

    logout = () => {
      // console.log('click');
      this.setAuthState(false, null, {});
    }

    render() {
      console.log("this. state-->", this.state);
      return (
        <AuthContext.Provider value={this.state}>
          {this.props.children}
        </AuthContext.Provider>
      );
    }
}

export default AuthProvider;
