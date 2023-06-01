import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import "./Footer.css";

const year = getFullYear();
const footer = getFooterCopy(true);

function Footer() {
  return (
    <footer className="App-footer">
        <p>Copyright {year} - {footer}</p>
      </footer>
  );
};

export default Footer;
