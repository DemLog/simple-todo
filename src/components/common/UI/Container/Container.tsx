import {ContainerProps} from "./Container.types";
import styled from "styled-components";

export const Container = styled.div<ContainerProps>`
  width: 96%;
  max-width: 780px;

  display: flex;
  justify-content: ${({jC = "start"}) => jC};
  align-items: ${({aI = "start"}) => aI};
  flex-direction: ${({fD = "row"}) => fD};
  
  position: ${({top}) => top ? "absolute" : "unset"};
  top: ${({top}) => top ? top+"px" : 0};

  margin-top: ${({mt = 0}) => mt}px;
  margin-bottom: ${({mb = 0}) => mb}px;
  margin-left: ${({ml = 0}) => ml}px;
  margin-right: ${({mr = 0}) => mr}px;
`;