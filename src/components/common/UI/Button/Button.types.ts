import {IMarginStyle} from "@core/interfaces/IMarginStyle";

export interface ButtonProps extends IMarginStyle {
    h?: number;
    bgColor?: string;
    c?: string;
    onClick?: () => void;
}