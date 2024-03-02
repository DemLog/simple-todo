import {CheckboxProps} from "./Checkbox.types";
import styled from "styled-components";

export const Checkbox = styled.input.attrs<CheckboxProps>((props) => ({
    type: "checkbox",
}))<CheckboxProps>`
  width: 24px;
  height: 24px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: 2px solid #4EA8DE;
  appearance: none;
  -webkit-appearance: none;
  
  &:checked {
    background-color: #5E60CE;
    position: relative;
    border: 2px solid #5E60CE;
    
    &::before {
      position: absolute;
      width: 10px;
      top: -2px;
      left: 50%;
      margin-left: -6px;
      color: #F2F2F2;
      font-weight: 900;
      font-size: 16px;
      content: '\\2713';
    }
  }
`;