import React, { Component } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

import * as ROUTES from "../../constants/routes";
import "../Login/login.css";

const SOPFormWrapper = styled.div`
  padding: 10px 30px;
`;
const FormHeader = styled.div`
  font-size: 20px;
`;
const FormHeaderContent = styled.span`
  color: red;
`;
const FormHeaderContent2 = styled.span``;
const Line = styled.span`
  border-bottom: 2px solid;
`;
const FormBody = styled.div``;
const FormInput = styled.input`
  width: 50vw;
  margin-top: 20px;
  margin-left: 30px;
`;
const FormCheck = styled.div`
  padding-left: 50px;
  margin-top: 30px;
`;
const FormInputcheck = styled.input`
  margin-left: 40px;
`;
const FormInputcheckC = styled.span`
  padding: 10px;
  margin-right: 10px;
`;
const FormSelect = styled.select`
  display: block;
  width: 51vw;
  margin-top: 20px;
  margin-left: 30px;
`;
const FormTextarea = styled.textarea`
  display: block;
  margin-left: 30px;
  margin-top: 30px;
  width: 50vw;
`;
const FormButton = styled.button`
  display:block;
  border-radius: 4px;
  background-color: #c0c0c0;
  border: none;
  color: #000;
  text-align: center;
  font-size: 15px;
  font-weight: normal;
  padding: 10px;
  width: 300px;
  cursor: pointer;
  margin-left: 520px;
  margin-top:5px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  }
`;
export default class SOPForm extends Component {
  render() {
    return (
      <SOPFormWrapper>
        <FormHeader>
          <i
            class="fa fa-dot-circle-o"
            style={{ color: "red", padding: "4px" }}
          />
          <FormHeaderContent>Create New SOP </FormHeaderContent>
          <Line>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Line>
          <i class="fa fa-dot-circle-o" style={{ padding: "4px" }} />
          <FormHeaderContent2>Add Doc</FormHeaderContent2>
        </FormHeader>
        <FormBody>
          <FormInput type="text" placeholder="SOP Name ....." />
          <FormInput type="text" placeholder="SOP Number ....." />
          <FormSelect>
            <option value="australia">Department</option>
          </FormSelect>{" "}
          <FormSelect>
            <option value="australia">Request Type</option>
          </FormSelect>{" "}
          <FormSelect>
            <option value="australia">Sub Type</option>
          </FormSelect>{" "}
          <FormSelect>
            <option value="australia">Author</option>
          </FormSelect>
          <FormCheck>
            <FormInputcheck type="checkbox" />{" "}
            <FormInputcheckC>Reviwer A</FormInputcheckC>
            <FormInputcheck type="checkbox" />{" "}
            <FormInputcheckC>Reviwer B</FormInputcheckC>
            <FormInputcheck type="checkbox" />{" "}
            <FormInputcheckC>Reviwer C</FormInputcheckC>
            <FormInputcheck type="checkbox" />{" "}
            <FormInputcheckC>Reviwer D</FormInputcheckC>
            <FormInputcheck type="checkbox" />{" "}
            <FormInputcheckC>Reviwer E</FormInputcheckC>
          </FormCheck>
          <FormCheck>
            <FormInputcheck type="checkbox" />{" "}
            <FormInputcheckC>Approver A</FormInputcheckC>
            <FormInputcheck type="checkbox" />{" "}
            <FormInputcheckC>Approver B</FormInputcheckC>
            <FormInputcheck type="checkbox" />{" "}
            <FormInputcheckC>Approver C</FormInputcheckC>
            <FormInputcheck type="checkbox" />{" "}
            <FormInputcheckC>Approver D</FormInputcheckC>
            <FormInputcheck type="checkbox" />{" "}
            <FormInputcheckC>Approver E</FormInputcheckC>
          </FormCheck>
          <FormTextarea rows="4" cols="5000">
            Justification........
          </FormTextarea>
          <FormButton>Save Draft</FormButton>
          <Link to={ROUTES.SOPForm2}>
            <FormButton>Next&gt;&gt;</FormButton>
          </Link>
        </FormBody>
      </SOPFormWrapper>
    );
  }
}
