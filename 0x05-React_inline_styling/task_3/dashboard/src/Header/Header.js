import logo from '../assets/holberton-logo.jpg';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <header className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt="Holberton Logo" />
      <h1>School Dashboard</h1>
    </header>
  );
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

export default Header;