import React from "react";
import { connect } from "react-redux";
import { getFullYear, getFooterCopy } from "../utils/utils";
import AppContext from '../App/AppContext';
import "./Footer.css";

const year = getFullYear();
const footer = getFooterCopy(true);

export function Footer() {
  return (
    <AppContext.Consumer>
      {(value) => {
        return (
            <footer className="App-footer">
              <p>Copyright {year} - {footer}</p>
              {value.user.isLoggedIn && ( <a href="#">Contact us</a>)}
            </footer>
        );
      }}
    </AppContext.Consumer>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.get("user.isLoggedIn"),
  };
};

export default connect(mapStateToProps)(Footer);
