import {LayoutProps} from "./Layout.types";
import styled from "styled-components";

export const Layout = styled.div<LayoutProps>`
    background-color: ${({bgColor}) => bgColor ?? ""};
  
    width: 100%;
    height: ${({h}) => h ? h+"px" : "auto"};
  
    display: flex;
    justify-content: center;
  
    position: ${({relative}) => relative ? "relative" : "unset"};

  margin-top: ${({mt = 0}) => mt}px;
  margin-bottom: ${({mb = 0}) => mb}px;
  margin-left: ${({ml = 0}) => ml}px;
  margin-right: ${({mr = 0}) => mr}px;
`;