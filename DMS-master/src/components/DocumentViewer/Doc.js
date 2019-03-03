import React from "react";
import "../Home/bootstrap.min.css";
import styled from "styled-components";
import Iframe from "react-iframe";

import "./Doc.css";

const ResponsiveIframe = styled.iframe`
  width: 80%;
  height: 550px;
  margin-top:-80px
  float:right
`;
const BorderDiv = styled.div`
margin-top:20px
border:2px solid
width:15%
`;
const DocWrapper = styled.div`
  padding-left: 40px;
`;
const Doc = () => (
  <DocWrapper>
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-lg-3">
          <BorderDiv className="row">SOP Name</BorderDiv>

          <BorderDiv className="row">
            <input type="file" title="Browse" />
            Resume
          </BorderDiv>
        </div>

        <div className="col-md-6 col-lg-6">
          <ResponsiveIframe
            title="doc"
            src="https://view.officeapps.live.com/op/embed.aspx?src=http://ruraldiksha.nic.in/%5Cwritereaddata%5CfloatResumePhoto%5C3834_Mahender%20Reddy%20Resume.doc"
          >
            This is an embedded document, powered by{" "}
          </ResponsiveIframe>
        </div>
        <div />
      </div>
    </div>
  </DocWrapper>
  // <div>
  // <Iframe url='https://view.officeapps.live.com/op/embed.aspx?src=http%3A%2F%2Fieee802%2Eorg%3A80%2Fsecmail%2FdocIZSEwEqHFr%2Edoc'
  //     width="1000px"
  //     height="800px"
  //     id="myId"
  //     className="myClassname"
  //     display="initial"

  //     />
  //     </div>
);

export default Doc;
