import React from "react";
import styled from "styled-components";
import "../Home/font-awesome.min.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import LMSHome from "./home";
const LMSwrapper = styled.div``;
const LMSNavbar = styled.ul`
  list-style-type: none;
  margin: 0;
  background-color: #000;
  position: fixed;
  left: 0px;
  top: 0px;
`;
const LMSNavbarlist = styled.li`
  color: white;
  padding: 35px 0px;
  font-size: 2.5em;
  text-align: center;
  &:hover {
    background-color: #b0c4de;
    color: #4682b4;
  }
`;
const LMScontent = styled.div`
  font-size: 0.5em;
`;
const Icon = styled.i``;
const Active = {
  background: "#4682B4"
};
const LMSside = styled.div`
  position: fixed;
  left: 180px;
  top: 80px;
`;
const LMSLogo = styled.li`
  color: #483d8b;
  padding: 50px;
  font-size: 3em;
  text-align: center;
  margin-bottom: 120px;
`;

const LMS = () => (
  <LMSwrapper>
    <LMSNavbar>
      <LMSLogo>
        <Icon className="fa fa-leaf" />
      </LMSLogo>
      <LMSNavbarlist style={Active}>
        <Icon className="fa fa-user" />
        <br />
        <LMScontent>Home</LMScontent>
      </LMSNavbarlist>
      <LMSNavbarlist>
        <Icon className="fa fa-archive" />
        <br /> <LMScontent>My Courses</LMScontent>
      </LMSNavbarlist>
      <LMSNavbarlist>
        <Icon className="fa fa-users" />
        <br /> <LMScontent>Explore</LMScontent>
      </LMSNavbarlist>
      <LMSNavbarlist />
      <LMSNavbarlist />
      <LMSNavbarlist />
      <LMSNavbarlist />
      <LMSNavbarlist />
    </LMSNavbar>
    <LMSside>
      <Route exact path={ROUTES.LMS_HOME} component={LMSHome} />
    </LMSside>
  </LMSwrapper>
);

export default LMS;
