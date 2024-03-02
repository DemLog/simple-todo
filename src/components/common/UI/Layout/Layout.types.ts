import {IMarginStyle} from "@core/interfaces/IMarginStyle";

export interface LayoutProps extends IMarginStyle {
    bgColor?: string;
    h?: number;
    relative?: boolean;
}