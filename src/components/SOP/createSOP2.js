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
  margin-top: 5px;
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
const FormButtonB = styled.input`
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

export default class SOPForm2 extends Component {
  render() {
    return (
      <SOPFormWrapper>
        <FormHeader>
          <i
            class="fa fa-dot-circle-o"
            style={{ color: "red", padding: "4px" }}
          />
          <FormHeaderContent>Create New Doc </FormHeaderContent>
          <Line>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Line>
          <i class="fa fa-dot-circle-o" style={{ padding: "4px" }} />
          <FormHeaderContent2>Add Doc</FormHeaderContent2>
        </FormHeader>
        <FormBody>
          <FormInput
            type="text"
            placeholder="Doc Title ....."
            value="Previous Name"
          />
          <FormInput
            type="text"
            placeholder="Doc Version ....."
            value="45a487"
          />
          <FormInput type="text" placeholder="Doc Title ....." />
          <FormInput type="text" placeholder="Doc Version ....." />
          <FormSelect>
            <option value="australia">Doc Type</option>
          </FormSelect>{" "}
          <FormSelect>
            <option value="australia">Sub Type</option>
          </FormSelect>{" "}
          <FormSelect>
            <option value="australia">Doc Number</option>
          </FormSelect>
          <FormTextarea rows="4" cols="5000">
            Justification........
          </FormTextarea>
          <FormButton>Cancel</FormButton>
          <FormButton>Upload Doc...</FormButton>
          <Link to={ROUTES.DOC}>
            <FormButton>Submit&gt;&gt;</FormButton>
          </Link>
        </FormBody>
      </SOPFormWrapper>
    );
  }
}
