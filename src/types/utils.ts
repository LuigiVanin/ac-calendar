import { css } from "../../stitches.config";
import { button } from "../components/button/button.style";
import { text } from "../components/typography";

export type StitchesCss = Parameters<typeof css>[0];

export type ComponentCss<T extends (...args: any) => any> = Parameters<T>[0];

export type ButtonCss = ComponentCss<typeof button>;

export type TextCss = ComponentCss<typeof text>;
