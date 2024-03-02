import {IMarginStyle} from "@core/interfaces/IMarginStyle";

export interface TextProps extends IMarginStyle {
    c?: string;
    w?: number;
    fs?: number;
    isLT?: boolean;
}