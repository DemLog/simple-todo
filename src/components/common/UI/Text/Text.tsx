import {TextProps} from "./Text.types";
import styled from "styled-components";

export const Text = styled.span<TextProps>`
  color: ${({c = "#FFFFFF"}) => c};
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  font-weight: ${({w = 300}) => w};
  font-size: ${({fs = 12}) => fs}px;
  text-decoration: ${({isLT = false}) => isLT ? "line-through" : "none"};

  margin-top: ${({mt = 0}) => mt}px;
  margin-bottom: ${({mb = 0}) => mb}px;
  margin-left: ${({ml = 0}) => ml}px;
  margin-right: ${({mr = 0}) => mr}px;
`;