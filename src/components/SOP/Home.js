import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import styled from "styled-components";
const HeaderSOP = styled.div`
  color: black;
  font-size: 2.5em;
  font-weight: bold;
`;
const HeaderSOPline = styled.div`
  font-size: 1em;
  padding: 2px;
  margin-top: 10px;
  font-weight: bold;
`;
const HeaderSOPWrapper = styled.div`
  width: 65vw;
  height: 85vh;
`;
const HeaderSOPWrapperSide = styled.div`
  width: 20vw;
  height: 85vh;
  margin-top: 20px;
  float: right;
`;
const HeaderSOPButton = styled.button`
  display: inline-block;
  border-radius: 4px;
  background-color: #c0c0c0;
  border: none;
  color: #000;
  text-align: center;
  font-size: 15px;
  font-weight: normal;
  padding: 8px 15px;
  width: 300px;
  cursor: pointer;
  margin: 5px;
  float: right;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  }
`;
const SOPPendingBox = styled.div`
  border: 2px solid white;
  width: 63vw;
  height: 100px;
  margin: 10px;
  box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-top: 20px;
`;
const SOPPendingBoxHeader = styled.div`
  font-size: 2em;
  font-weight: lighter;
  padding: 5px 10px;
`;
const SOPPendingBoxUl = styled.ul`
  list-style-type: none;
`;
const SOPPendingBoxLi = styled.li`
  display: inline-block;
  margin: 10px 30px;
`;
const SOPPendingBoxLiStatus = styled.div`
  color: black;
  text-align: center;
`;
const ContentWrapper = styled.div`
  width: 85vw;
`;
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
const SOPHome = () => (
  <ContentWrapper>
    <HeaderSOPWrapperSide>
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
    </HeaderSOPWrapperSide>
    <HeaderSOPWrapper>
      <Link to={ROUTES.SOPForm}>
        <HeaderSOPButton>Add New SOP &gt;&gt;</HeaderSOPButton>
      </Link>
      <HeaderSOP>Dashboard </HeaderSOP>
      <HeaderSOPline>Something must be here so we can go forward</HeaderSOPline>
      <SOPPendingBox>
        <SOPPendingBoxHeader>
          <i
            class="fa fa-dot-circle-o"
            style={{ color: "red", padding: "4px" }}
          />
          6544565|CTO-UDP-BnTS-AI-DMP-NDP
        </SOPPendingBoxHeader>
        <SOPPendingBoxUl>
          <SOPPendingBoxLi>
            Document Type<SOPPendingBoxLiStatus>Annual</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
          <SOPPendingBoxLi>
            Effective Start Date
            <SOPPendingBoxLiStatus>Apr 1, 2018</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
          <SOPPendingBoxLi>
            Effective End Date
            <SOPPendingBoxLiStatus>Mar 31,2018</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
          <SOPPendingBoxLi>
            Role<SOPPendingBoxLiStatus>Developer</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
          <SOPPendingBoxLi>
            Pending with
            <SOPPendingBoxLiStatus>Preetha Rajiv</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
          <SOPPendingBoxLi>
            Pending For<SOPPendingBoxLiStatus>Approval</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
        </SOPPendingBoxUl>
      </SOPPendingBox>
      <SOPPendingBox>
        <SOPPendingBoxHeader>
          <i
            class="fa fa-dot-circle-o"
            style={{ color: "red", padding: "4px" }}
          />
          6544565|CTO-UDP-BnTS-AI-DMP-NDP
        </SOPPendingBoxHeader>
        <SOPPendingBoxUl>
          <SOPPendingBoxLi>
            Document Type<SOPPendingBoxLiStatus>Annual</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
          <SOPPendingBoxLi>
            Effective Start Date
            <SOPPendingBoxLiStatus>Apr 1, 2018</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
          <SOPPendingBoxLi>
            Effective End Date
            <SOPPendingBoxLiStatus>Mar 31,2018</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
          <SOPPendingBoxLi>
            Role<SOPPendingBoxLiStatus>Developer</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
          <SOPPendingBoxLi>
            Pending with
            <SOPPendingBoxLiStatus>Preetha Rajiv</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
          <SOPPendingBoxLi>
            Pending For<SOPPendingBoxLiStatus>Approval</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
        </SOPPendingBoxUl>
      </SOPPendingBox>
      <SOPPendingBox>
        <SOPPendingBoxHeader>
          <i
            class="fa fa-dot-circle-o"
            style={{ color: "red", padding: "4px" }}
          />
          6544565|CTO-UDP-BnTS-AI-DMP-NDP
        </SOPPendingBoxHeader>
        <SOPPendingBoxUl>
          <SOPPendingBoxLi>
            Document Type<SOPPendingBoxLiStatus>Annual</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
          <SOPPendingBoxLi>
            Effective Start Date
            <SOPPendingBoxLiStatus>Apr 1, 2018</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
          <SOPPendingBoxLi>
            Effective End Date
            <SOPPendingBoxLiStatus>Mar 31,2018</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
          <SOPPendingBoxLi>
            Role<SOPPendingBoxLiStatus>Developer</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
          <SOPPendingBoxLi>
            Pending with
            <SOPPendingBoxLiStatus>Preetha Rajiv</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
          <SOPPendingBoxLi>
            Pending For<SOPPendingBoxLiStatus>Approval</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
        </SOPPendingBoxUl>
      </SOPPendingBox>
      <SOPPendingBox>
        <SOPPendingBoxHeader>
          <i
            class="fa fa-dot-circle-o"
            style={{ color: "red", padding: "4px" }}
          />
          6544565|CTO-UDP-BnTS-AI-DMP-NDP
        </SOPPendingBoxHeader>
        <SOPPendingBoxUl>
          <SOPPendingBoxLi>
            Document Type<SOPPendingBoxLiStatus>Annual</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
          <SOPPendingBoxLi>
            Effective Start Date
            <SOPPendingBoxLiStatus>Apr 1, 2018</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
          <SOPPendingBoxLi>
            Effective End Date
            <SOPPendingBoxLiStatus>Mar 31,2018</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
          <SOPPendingBoxLi>
            Role<SOPPendingBoxLiStatus>Developer</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
          <SOPPendingBoxLi>
            Pending with
            <SOPPendingBoxLiStatus>Preetha Rajiv</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
          <SOPPendingBoxLi>
            Pending For<SOPPendingBoxLiStatus>Approval</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
        </SOPPendingBoxUl>
      </SOPPendingBox>
      <SOPPendingBox>
        <SOPPendingBoxHeader>
          <i
            class="fa fa-dot-circle-o"
            style={{ color: "red", padding: "4px" }}
          />
          6544565|CTO-UDP-BnTS-AI-DMP-NDP
        </SOPPendingBoxHeader>
        <SOPPendingBoxUl>
          <SOPPendingBoxLi>
            Document Type<SOPPendingBoxLiStatus>Annual</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
          <SOPPendingBoxLi>
            Effective Start Date
            <SOPPendingBoxLiStatus>Apr 1, 2018</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
          <SOPPendingBoxLi>
            Effective End Date
            <SOPPendingBoxLiStatus>Mar 31,2018</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
          <SOPPendingBoxLi>
            Role<SOPPendingBoxLiStatus>Developer</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
          <SOPPendingBoxLi>
            Pending with
            <SOPPendingBoxLiStatus>Preetha Rajiv</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
          <SOPPendingBoxLi>
            Pending For<SOPPendingBoxLiStatus>Approval</SOPPendingBoxLiStatus>
          </SOPPendingBoxLi>
        </SOPPendingBoxUl>
      </SOPPendingBox>
    </HeaderSOPWrapper>
  </ContentWrapper>
);

export default SOPHome;
