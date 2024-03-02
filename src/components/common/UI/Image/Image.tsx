import {ImageProps} from "./Image.types";
import styled from "styled-components";

export const Image = styled.img.attrs<ImageProps>((props) => ({
    src: props.src
}))<ImageProps>`
  margin-top: ${({mt = 0}) => mt}px;
  margin-bottom: ${({mb = 0}) => mb}px;
  margin-left: ${({ml = 0}) => ml}px;
  margin-right: ${({mr = 0}) => mr}px;
`;