import { INavigable } from "./navigable.interface";

export interface ISitemap {
    [key: string]: INavigable & {children?: INavigable[]};
};