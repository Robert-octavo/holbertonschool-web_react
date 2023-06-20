import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import AppContext from '../App/AppContext';
import "./Footer.css";

const year = getFullYear();
const footer = getFooterCopy(true);

function Footer() {
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

export default Footer;
