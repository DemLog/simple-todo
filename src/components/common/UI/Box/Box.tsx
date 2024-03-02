import {BoxProps} from "./Box.types";
import styled from "styled-components";

export const Box = styled.div<BoxProps>`
  width: ${({w = "auto"}) => typeof w === "string" ? w : w + "px"};;
  height: ${({h = "auto"}) => typeof h === "string" ? h : h + "px"};
  box-sizing: border-box;

  display: ${({display= "block"}) => display};
  justify-content: ${({jC= "start"}) => jC};
  align-items: ${({aI= "start"}) => aI};
  flex-direction: ${({fD= "row"}) => fD};
  flex-grow: ${({fG = 0}) => fG};
  gap: ${({gap = 0}) => gap + "px"};

  margin-top: ${({mt = 0}) => mt}px;
  margin-bottom: ${({mb = 0}) => mb}px;
  margin-left: ${({ml = 0}) => ml}px;
  margin-right: ${({mr = 0}) => mr}px;
   
  padding: ${({p = 0}) => p}px;
`;