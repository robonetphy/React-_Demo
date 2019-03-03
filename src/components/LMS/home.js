import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import styled from "styled-components";
const HeaderLMS = styled.div`
  color: black;
  font-size: 2.5em;
  font-weight: bold;
`;
const HeaderLMSline = styled.div`
  font-size: 1em;
  padding: 2px;
  margin-top: 10px;
  font-weight: bold;
`;
const HeaderLMSWrapper = styled.div`
  width: 80vw;
  height: 85vh;
  margin: auto;
`;
const HeaderLMSButton = styled.button`
  background-color: transparent;
  --color-from: #444;
  --color-to: #888;
  background-image: linear-gradient(
    to right,
    var(--color-from),
    var(--color-to)
  );
  background-blend-mode: overlay;
  color: #fff;
  border: none;
  outline: 0 !important;
  border-radius: 6px;
  padding: 12px 30px;
  font-size: 16px;
  font-family: "Gudea", sans-serif;
  box-shadow: 4px 6px 30px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in;
  --color-from: #834d9b;
  --color-to: #d04ed6;
  float: right;
`;
const LMSPendingBox = styled.div`
  border: 2px solid white;
  width: 75 vw;
  height: 20vh;
  margin: 10px;
  box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-top: 20px;
  padding: 60px;
`;
const LMSPendingBoxHeader = styled.div`
  font-size: 1.2em;
  font-weight: lighter;
  padding: 5px 10px;
  color: #d04ed6;
`;
const LMSPendingBoxUl = styled.ul`
  list-style-type: none;
`;
const LMSPendingBoxLi = styled.li`
  display: inline-block;
  margin: 10px 10px;
`;
const LMSPendingBoxLiStatus = styled.button`
  background-color: transparent;
  --color-from: #444;
  --color-to: #888;
  background-image: linear-gradient(
    to right,
    var(--color-from),
    var(--color-to)
  );
  background-blend-mode: overlay;
  color: #fff;
  border: none;
  outline: 0 !important;
  border-radius: 6px;
  padding: 12px 30px;
  font-size: 16px;
  font-family: "Gudea", sans-serif;
  box-shadow: 4px 6px 30px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in;
  --color-from: #e052a0;
  --color-to: #f15c41;
  width: 18vw;
  height: 15vh;
  text-align: left;
`;
const ContentWrapper = styled.div`
  width: 85vw;
`;
const SubProgressBar = styled.div`
  width: 200px;
  height: 2px;
  background-color: #c5c5c5;
  border-radius: 16px;
`;
const Bar = styled.div`
  background-color: blue;
  width: 32%;
  height: 100%;
  border-radius: 16px;
`;
const SubHeader = styled.div`
  color: white;
  text-align: left;
  margin-bottom: 50px;
`;
const LMSHome = () => (
  <ContentWrapper>
    <HeaderLMSWrapper>
      <HeaderLMS>Dashboard </HeaderLMS>
      <HeaderLMSline>Something must be here so we can go forward</HeaderLMSline>
      <LMSPendingBox>
        <HeaderLMSButton>View &gt;&gt;</HeaderLMSButton>
        <LMSPendingBoxHeader>
          <i
            class="fa fa-angle-right"
            style={{ color: "red", padding: "4px" }}
          />
          Recent Courses
        </LMSPendingBoxHeader>
        <LMSPendingBoxUl>
          <LMSPendingBoxLi>
            <LMSPendingBoxLiStatus>
              <SubHeader>Course-1</SubHeader>1 of 7 task completed
              <SubProgressBar>
                <Bar />
              </SubProgressBar>
            </LMSPendingBoxLiStatus>
          </LMSPendingBoxLi>
          <LMSPendingBoxLi>
            <LMSPendingBoxLiStatus>
              <SubHeader>Course-2</SubHeader>1 of 7 task completed
              <SubProgressBar>
                <Bar />
              </SubProgressBar>
            </LMSPendingBoxLiStatus>
          </LMSPendingBoxLi>
          <LMSPendingBoxLi>
            <LMSPendingBoxLiStatus>
              <SubHeader>Course-3</SubHeader>1 of 7 task completed
              <SubProgressBar>
                <Bar />
              </SubProgressBar>
            </LMSPendingBoxLiStatus>
          </LMSPendingBoxLi>
        </LMSPendingBoxUl>
      </LMSPendingBox>
      <LMSPendingBox>
        <HeaderLMSButton>View &gt;&gt;</HeaderLMSButton>
        <LMSPendingBoxHeader>
          <i
            class="fa fa-angle-right"
            style={{ color: "red", padding: "4px" }}
          />
          Explore Courses
        </LMSPendingBoxHeader>
        <LMSPendingBoxUl>
          <LMSPendingBoxLi>
            <LMSPendingBoxLiStatus>
              <SubHeader>Course-1</SubHeader>1 of 7 task completed
              <SubProgressBar>
                <Bar />
              </SubProgressBar>
            </LMSPendingBoxLiStatus>
          </LMSPendingBoxLi>
          <LMSPendingBoxLi>
            <LMSPendingBoxLiStatus>
              <SubHeader>Course-2</SubHeader>1 of 7 task completed
              <SubProgressBar>
                <Bar />
              </SubProgressBar>
            </LMSPendingBoxLiStatus>
          </LMSPendingBoxLi>
          <LMSPendingBoxLi>
            <LMSPendingBoxLiStatus>
              <SubHeader>Course-3</SubHeader>1 of 7 task completed
              <SubProgressBar>
                <Bar />
              </SubProgressBar>
            </LMSPendingBoxLiStatus>
          </LMSPendingBoxLi>
        </LMSPendingBoxUl>
      </LMSPendingBox>
    </HeaderLMSWrapper>
  </ContentWrapper>
);

export default LMSHome;
