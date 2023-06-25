import logo from '../assets/holberton-logo.jpg';
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';
import { connect } from "react-redux";
import { logout } from '../actions/uiActionCreators';
import PropTypes from 'prop-types';

export class Header extends Component {
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

Header.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func,
};

Header.defaultProps = {
  user: null,
  logOut: () => {},
};

const mapStateToProps = (state) => {
  return {
    user: state.get("user"),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
