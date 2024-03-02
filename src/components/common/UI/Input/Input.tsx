import {InputProps} from "./Input.types";
import styled from "styled-components";

export const Input = styled.input.attrs<InputProps>((props) => ({
    type: "text",
    placeholder: props.ph
}))<InputProps>` 
  border: #0D0D0D 1px inset;
  border-radius: 8px;
  outline: none;

  background-color: ${({bgColor = "#FFFFFF"}) => bgColor};

  width: ${({fullW = true}) => fullW ? "100%" : "100px"};
  height: ${({h = 20}) => h}px;
  font-size: ${({h = 20}) => Math.round(35 * h / 100)}px;;
  font-weight: 400;
  padding: 0 16px;
  box-sizing: border-box;

  color: ${({c = "#FFFFFF"}) => c};

  &::placeholder {
    font-weight: 400;
    color: ${({phColor = "#FFFFFF"}) => phColor};
  }

  &:focus {
    border: #797979 1px inset;
  }

  margin-top: ${({mt = 0}) => mt}px;
  margin-bottom: ${({mb = 0}) => mb}px;
  margin-left: ${({ml = 0}) => ml}px;
  margin-right: ${({mr = 0}) => mr}px;

`;