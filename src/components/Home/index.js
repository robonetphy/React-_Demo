import React from "react";
import "./bootstrap-responsive.min.css";
import "./bootstrap.min.css";
import "./theme.css";
import "./font-awesome.min.css";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import styled from "styled-components";

const notistyle = {
  border: "1.5px solid green"
};
const notistyler = {
  border: "1.5px solid red"
};
const green = {
  color: "green"
};
const red = {
  color: "red"
};
const HeaderName = styled.div`
  font-size: 3.5em;
  margin-bottom: 50px;
  margin-top: 10px;
`;
const Footer = styled.div`
  font-size: 1em;
  padding: 30px;
  background: #2d3436;
  color: white;
  border-radius: 5px;
  width: 807px;
  content: "";
  clear: both;
  display: table;
`;
const FooterContent = styled.div`
  border-left: 1px solid white;
  padding: 10px 30px;
  float: left;
`;
const Fcontent = styled.div``;
const white = {
  color: "white"
};
const background = {
  background: "#d9e3f0",
  height: "85.5vh",
  overflow: "hidden"
};
const Home = () => (
  <div className="wrapper" style={background}>
    <div className="container">
      <div className="row">
        <div className="span3">
          <div className="sidebar">
            <div className="btn-box big span3" style={notistyle}>
              <p style={green}>CR Number :83413546</p>
              <p>Is Resolved.Click to provide your Feedback</p>
            </div>
            <div className="btn-box big span3" style={notistyle}>
              <p style={green}>CR Number :83413546</p>
              <p>Is Resolved.Click to provide your Feedback</p>
            </div>
            <div className="btn-box big span3" style={notistyle}>
              <p style={green}>CR Number :83413546</p>
              <p>Is Resolved.Click to provide your Feedback</p>
            </div>
            <div className="btn-box big span3" style={notistyler}>
              <p style={red}>CR Number :83413546</p>
              <p>Is not Resolved.Click to provide your Feedback</p>
            </div>
          </div>
        </div>
        <div className="span9">
          <div className="content">
            <div className="btn-controls">
              <div className="btn-box-row row-fluid">
                <HeaderName>Welcome To Dashboard</HeaderName>

                <Link to={ROUTES.SOP_HOME}>
                  <div
                    href=""
                    className="btn-box big span4"
                    style={{ background: "#2E86C1" }}
                  >
                    <i className="fa fa-user" style={white} />
                    <b style={white}>SOP</b>
                    <p className="text-muted" style={white}>
                      add new request
                    </p>
                  </div>
                </Link>

                <Link
                  to={ROUTES.LMS_HOME}
                  className="btn-box big span4"
                  style={{ background: "#148F77" }}
                >
                  {" "}
                  <i className="fa fa-file-text" style={white} />
                  <b style={white}>LMS</b>
                  <p className="text-muted" style={white}>
                    View Courses
                  </p>
                </Link>
                <div
                  href=""
                  className="btn-box big span4"
                  style={{ background: "#B03A2E" }}
                >
                  <i className=" fa fa-puzzle-piece" style={white} />
                  <b style={white}>App2</b>
                  <p className="text-muted" style={white}>
                    add something
                  </p>
                </div>
              </div>
              <div className="btn-box-row row-fluid">
                <div className="span8">
                  <div className="row-fluid">
                    <div className="span12">
                      <div
                        href=""
                        className="btn-box small span4"
                        style={{ background: "#85C1E9" }}
                      >
                        <i className="fa fa-inbox" style={white} />
                        <b style={white}>something</b>
                      </div>
                      <div
                        href=""
                        className="btn-box small span4"
                        style={{ background: "#F1C40F" }}
                      >
                        <i className="fa fa-file-text" style={white} />
                        <b style={white}>something</b>
                      </div>
                      <div
                        href=""
                        className="btn-box small span4"
                        style={{ background: "#E59866" }}
                      >
                        <i className="fa fa-laptop" style={white} />
                        <b style={white}>something</b>
                      </div>
                    </div>
                  </div>
                  <div className="row-fluid">
                    <div className="span12">
                      <div
                        href=""
                        className="btn-box small span4"
                        style={{ background: "#85929E" }}
                      >
                        <i className="fa fa-inbox" style={white} />
                        <b style={white}>something</b>
                      </div>
                      <div
                        href=""
                        className="btn-box small span4"
                        style={{ background: "#DC7633" }}
                      >
                        <i className="fa fa-file-text" style={white} />
                        <b style={white}>something</b>
                      </div>
                      <div
                        href=""
                        className="btn-box small span4"
                        style={{ background: "#D2B4DE" }}
                      >
                        <i className="fa fa-laptop" style={white} />
                        <b style={white}>Bounce something</b>{" "}
                      </div>
                    </div>
                  </div>
                  <Footer>
                    <FooterContent>
                      <Fcontent>Contact Us:</Fcontent>
                      <Fcontent> Phone Number:+91-67970979</Fcontent>
                      <Fcontent>Mobile Number:+91-67970979</Fcontent>
                    </FooterContent>
                    <FooterContent>
                      <Fcontent>Contact Us:</Fcontent>
                      <Fcontent> Phone Number:+91-67970979</Fcontent>
                      <Fcontent>Mobile Number:+91-67970979</Fcontent>
                    </FooterContent>
                    <FooterContent>
                      <Fcontent>Contact Us:</Fcontent>
                      <Fcontent> Phone Number:+91-67970979</Fcontent>
                      <Fcontent>Mobile Number:+91-67970979</Fcontent>
                    </FooterContent>
                  </Footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
