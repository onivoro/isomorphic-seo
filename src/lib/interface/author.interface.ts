import { IIdentifiable } from '@onivoro/isomorphic-crud-provider';
import { IArticle } from './article.interface';
import { IRegion } from './region.interface';

export interface IAuthor extends IIdentifiable, IRegion {
    firstName: string,
    lastName: string,
    linkedInProfile?: string
    articles?: IArticle[];
    email?: string;
}