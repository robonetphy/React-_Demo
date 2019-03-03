import React from "react";
import styled from "styled-components";
import "../Home/font-awesome.min.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import SOPHome from "./Home";
import SOPForm from "./createSOP";
import SOPForm2 from "./createSOP2";
import DOCView from "../DocumentViewer/Doc";
const SOPwrapper = styled.div``;
const SOPNavbar = styled.ul`
  list-style-type: none;
  margin: 0;
  background-color: #000;
  position: fixed;
  left: 0px;
  top: 0px;
`;
const SOPNavbarlist = styled.li`
  color: white;
  padding: 52px 0px;
  font-size: 2.5em;
  text-align: center;
  &:hover {
    background-color: #b0c4de;
    color: #4682b4;
  }
`;
const Sopcontent = styled.div`
  font-size: 0.5em;
`;
const Icon = styled.i``;
const Active = {
  background: "#4682B4"
};
const SOPside = styled.div`
  position: fixed;
  left: 180px;
  top: 80px;
`;
const SOPLogo = styled.li`
  color: #483d8b;
  padding: 50px;
  font-size: 3em;
  text-align: center;
`;

const SOP = () => (
  <Router>
    <SOPwrapper>
      <SOPNavbar>
        <SOPLogo>
          <Icon className="fa fa-leaf" />
        </SOPLogo>
        <SOPNavbarlist style={Active}>
          <Icon className="fa fa-user" />
          <br />
          <Sopcontent>One</Sopcontent>
        </SOPNavbarlist>
        <SOPNavbarlist>
          <Icon className="fa fa-archive" />
          <br /> <Sopcontent>One</Sopcontent>
        </SOPNavbarlist>
        <SOPNavbarlist>
          <Icon className="fa fa-users" />
          <br /> <Sopcontent>One</Sopcontent>
        </SOPNavbarlist>
        <SOPNavbarlist>
          <Icon className="fa fa-magnet" />
          <br /> <Sopcontent>One</Sopcontent>
        </SOPNavbarlist>
      </SOPNavbar>
      <SOPside>
        <Route exact path={ROUTES.SOP_HOME} component={SOPHome} />
        <Route exact path={ROUTES.SOPForm2} component={SOPForm2} />
        <Route exact path={ROUTES.SOPForm} component={SOPForm} />
        <Route exact path={ROUTES.DOC} component={DOCView} />
      </SOPside>
    </SOPwrapper>
  </Router>
);

export default SOP;
