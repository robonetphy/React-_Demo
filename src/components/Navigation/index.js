import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import * as ROUTES from "../../constants/routes";

const NavWrapper = styled.div``;
const Navulist = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #2ea3f2;
`;
const StyledLink = styled(NavLink)`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 30px;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: white;
  }
  &.active {
    background-color: #5e7a87;
  }
`;

const Navlist = styled.li`
  float: right;
  &:hover {
    background-color: #34444b;
  }
`;

const Navigation = () => (
  <NavWrapper>
    <Navulist>
      <Navlist>
        <StyledLink exact to={ROUTES.LOGIN}>
          Login
        </StyledLink>
      </Navlist>
      <Navlist>
        <StyledLink to={ROUTES.HOME}>Home</StyledLink>
      </Navlist>
      <Navlist>
        <StyledLink to={ROUTES.SOP_HOME}>SOP</StyledLink>
      </Navlist>
      <Navlist>
        <StyledLink to={ROUTES.LMS_HOME}>LMS</StyledLink>
      </Navlist>
    </Navulist>
  </NavWrapper>
);

export default Navigation;
