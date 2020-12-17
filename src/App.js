// Imports 
import React from "react";
import "./App.scss";
import GreenLogo from "./assets/logo.svg";

function App() {
  return (
    <div className="App">
      <section className="wrapper">
        <div className="content">
          <header>
            <img src={GreenLogo} alt="Green Logo" className="greenLogo" />
            <h1>Example login screen</h1>
            <h2>Getting started with Green.</h2>
          </header>
          <section>
            <form action="" className="login-form">
              <div className="input-group">
                <label htmlFor="username">Email Address</label>
                <input type="text" id="username" />
                <div className="checkboxContainer">
                  <label className="container">
                    <input type="checkbox" id="remember" />
                    <span className="checkmark"></span>
                  </label>
                  <label htmlFor="rememberSession" className="checkboxLabel">
                    Remember this device
                  </label>
                </div>
              </div>
              <button>Sign In</button>
            </form>
          </section>
        </div>
      </section>
    </div>
  );
}

export default App;
