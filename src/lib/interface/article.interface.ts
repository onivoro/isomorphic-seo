import { IIdentifiable } from '@onivoro/isomorphic-crud-provider'
import { IProsable } from "./prosable.interface";
import { IRegion } from './region.interface';

export interface IArticle extends IIdentifiable, IRegion, IProsable {
}
