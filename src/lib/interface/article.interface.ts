import { IIdentifiable } from '@onivoro/isomorphic-crud-provider'
import { IProsable } from "./prosable.interface";
import { IRegion } from './region.interface';
import { ITaggable } from './taggable.interface';

export interface IArticle extends IIdentifiable, IRegion, IProsable, ITaggable {
}
