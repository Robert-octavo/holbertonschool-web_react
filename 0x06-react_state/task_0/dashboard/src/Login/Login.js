import React from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  return (
    <div>
      <div className={css(styles.body)}>
        <p className={css(styles.p)}>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" className={css(styles.margin10)} />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" className={css(styles.margin10)}/>
        <button className={css(styles.padinngTop)} type="button">OK</button>
      </div>
    </div>
  );
};
const styles = StyleSheet.create({
  padinngTop: {
    '@media (max-width: 900px)': {
			marginTop: "10px",
      width: "10%",
		},
  },
  body: {
    '@media (max-width: 900px)': {
			display: "flex",
      flexDirection: "column",
		},
    minHeight: "50vh",
    textAlign: "left",
    marginLeft: "3vw",
  },
  p: {
    marginTop: "4vw",
    marginBottom: "2vw",
    fontSize: "1.2em",
  },
  margin10: {
    marginRight: "10px",
  },
});
export default Login;
