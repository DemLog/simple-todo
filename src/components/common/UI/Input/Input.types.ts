import {IMarginStyle} from "@core/interfaces/IMarginStyle";

export interface InputProps extends IMarginStyle {
    h?: number;
    fullW?: boolean;
    bgColor?: string;
    ph?: string;
    phColor?: string;
    c?: string;
}