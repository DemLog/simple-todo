import {ButtonProps} from "./Button.types";
import styled from "styled-components";

export const Button = styled.button.attrs<ButtonProps>((props) => ({
    onClick: props.onClick
}))<ButtonProps>`
  border-radius: 8px;
  border: none;
  height: ${({h = 20}) => h}px;
  padding: 0 16px;
  font-size: ${({h = 20}) => Math.round(33 * h / 100)}px;;
  font-weight: 700;
  background-color: ${({bgColor = "#FFFFFF"}) => bgColor};
  color: ${({c = "#FFFFFF"}) => c};
  box-sizing: border-box;
  
  &:active {
    transform: translate(0px, 1px);
  }
  
  margin-top: ${({mt = 0}) => mt}px;
  margin-bottom: ${({mb = 0}) => mb}px;
  margin-left: ${({ml = 0}) => ml}px;
  margin-right: ${({mr = 0}) => mr}px;
  
`;