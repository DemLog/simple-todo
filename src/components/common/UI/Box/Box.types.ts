import {IMarginStyle} from "@core/interfaces/IMarginStyle";

export interface BoxProps extends IMarginStyle {
    h?: number | string;
    w?: number | string;
    display?: string;
    jC?: string;
    aI?: string;
    fD?: "column" | "row";
    gap?: number;
    fG?: number;
    p?: number;
}