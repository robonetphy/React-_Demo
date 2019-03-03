import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation";
import HomePage from "../Home";
import SOPPage from "../SOP";
import LMSPage from "../LMS";
import LoginPage from "../Login";

import * as ROUTES from "../../constants/routes";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path={ROUTES.LOGIN} component={LoginPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.SOP_HOME} component={SOPPage} />
      <Route path={ROUTES.LMS_HOME} component={LMSPage} />
    </div>
  </Router>
);

export default App;
