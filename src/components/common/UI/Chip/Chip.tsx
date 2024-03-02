import {ChipProps} from "./Chip.types";
import styled from "styled-components";

export const Chip = styled.div<ChipProps>`
  background-color: #333333;
  color: #D9D9D9;
  
  font-size: 12px;
  font-weight: 700;
  
  padding: 4px 8px;
  border-radius: 10px;
  
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: ${({mt = 0}) => mt}px;
  margin-bottom: ${({mb = 0}) => mb}px;
  margin-left: ${({ml = 0}) => ml}px;
  margin-right: ${({mr = 0}) => mr}px;
`;