
import { INavigable } from "./navigable.interface";
import { IOpenGraphable } from "./open-graphable.interface";
import { ITaggable } from "./taggable.interface";

export type IRegion = IOpenGraphable & INavigable & ITaggable;
