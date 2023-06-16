import logo from '../assets/holberton-logo.jpg';
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';


export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { user, logOut } = this.context;
    return (
      <header className={css(styles.header)}>
        <img src={logo} className={css(styles.logo)} alt="Holberton Logo" />
        <h1>School Dashboard</h1>
        {user.isLoggedIn && (
          <p id="logoutSection">
            Welcome <b>{user.email}</b> <a onClick={logOut}>(logout)</a>
          </p>
        )}
      </header>
    );
  }
};

const styles = StyleSheet.create({
  header: {
    minHeight: "25vh",
    display: "flex",
    flexDirection: "row",
    alignitems: "centeR",
    justifyContent: "flex-start",
    fontSize: ".9rem",
    color: "#e0354b",
  },
  logo: {
    height: "25vmin",
    pointerEvents: "none",
  }
});

Header.contextType = AppContext;
