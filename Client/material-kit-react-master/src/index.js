import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import RegisterPage from "views/RegisterPage/RegisterPage.js";
import AboutPage from "views/AboutPage/AboutPage.js";
import ContactPage from "views/ContactPage/ContactPage.js"
import Register_Temp from "views/RegisterPage/Register_Temp.js"
import UserProfilePage from "views/UserProfilePage/UserProfilePage.js"
import NotFoundPage from "views/Page404/Page404.js"

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={Components} exact />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/about-page" component={AboutPage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/register-page" component={RegisterPage} />
      <Route path="/contact-page" component={ContactPage} />
      <Route path="/register-temp" component={Register_Temp} />
      <Route path='/profile-page' component ={UserProfilePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
