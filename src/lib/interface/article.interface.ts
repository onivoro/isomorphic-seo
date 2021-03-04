import { IIdentifiable } from "./identifiable.interface";
import { IOpenGraphable } from "./open-graphable.interface";
import { IProsable } from "./prosable.interface";

export interface IArticle extends IIdentifiable, IOpenGraphable, IProsable {
}
