import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, email: "", password: "", enableSubmit: false };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
    this.setState({ isLoggedIn: true });
    //console.log('handleLoginSubmit', this.state.isLoggedIn);
  };

  handleChangeEmail = (e) => {
    const email = e.target.value;
    const password = this.state.password;
    if (email.length > 0 && password.length > 0) {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
    this.setState({ email: e.target.value });
  };

  handleChangePassword = (e) => {
    const email = this.state.email;
    const password = e.target.value;
    if (email.length > 0 && password.length > 0) {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <div>
        <div className={css(styles.body)}>
          <p className={css(styles.p)}>Login to access the full dashboard</p>
          <form action="" onSubmit={this.handleLoginSubmit}>
            <label htmlFor="email">Email: </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className={css(styles.margin10)} 
              value={this.state.email}
              onChange={ this.handleChangeEmail }
            />
            <label htmlFor="password">Password: </label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              className={css(styles.margin10)}
              value={this.state.password}
              onChange={ this.handleChangePassword }
            />
            <input 
              className={css(styles.padinngTop)} 
              type="submit" 
              value="OK"
              disabled={ !this.state.enableSubmit }
            />
          </form>
        </div>
      </div>
    );
  }
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
