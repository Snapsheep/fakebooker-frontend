import styled, { keyframes } from "styled-components";
import { Row, Button } from "antd";
import { ReactComponent as BgImg } from "../../assets/icons/undraw_processing_qj6a.svg";

const inverseRotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(-360deg) ;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg) ;
  }
`;

const dash = keyframes`
 to {
   stroke-dashoffset: 1000;
 }
`;

export const RegisterPageContainer = styled(Row)`
  && {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
export const SVGImgBackground = styled(BgImg)`
  display: none;
  @media only screen and (min-width: 1100px) {
    width: 100%;
    height: 100vh;
    display: block;
  }
  .gear1 {
    animation: ${inverseRotate} infinite 5s linear;
    transform-origin: center;
    transform-box: fill-box;
    height: 25rem;
    width: 25rem;
    display: inline-block;
    margin: auto;
  }
  .gear3 {
    animation: ${rotate} infinite 5s linear;
    transform-origin: center;
    transform-box: fill-box;
    height: 25rem;
    width: 25rem;
    display: inline-block;
    margin: auto;
  }

  .line {
    stroke-dasharray: 30;
    animation: ${dash} infinite 10s linear;
  }
`;

export const RegisterPageBackground = styled(Row)`
  @media only screen and (min-width: 1100px) {
    && {
      display: flex;
      width: 85%;
      height: 100%;
      background-color: rgba(25, 119, 243, 0.1);
    }
  }
`;

export const FormContainer = styled(Row)`
  && {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const SignInContainer = styled(Row)`
  && {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: flex-end;
    font-size: 14px;
    margin: 30px 60px 0 0;
  }
`;
export const SignInButton = styled(Button)`
  && {
    color: #1877f2;
    padding: 0;
    margin-left: 2px;
    height: auto;
    font-weight: 500;
    line-height: 1;
  }
`;

export const ActionsContainer = styled(Row)`
  && {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }
`;
