import { IIdentifiable } from '@onivoro/isomorphic-crud-provider'
import { IAuthor } from './author.interface';
import { IProsable } from "./prosable.interface";
import { IRegion } from './region.interface';

export interface IArticle extends IIdentifiable, IRegion, IProsable {
    authors?: IAuthor[];
}
