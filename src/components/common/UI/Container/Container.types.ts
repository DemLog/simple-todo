import {IMarginStyle} from "@core/interfaces/IMarginStyle";

export interface ContainerProps extends IMarginStyle {
    jC?: string;
    aI?: string;
    fD?: "column" | "row";
    top?: number;
}