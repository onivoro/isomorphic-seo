import { IIdentifiable } from '@onivoro/isomorphic-crud-provider';
import { IProsable, ITaggable } from 'src';
import { IArticle } from './article.interface';
import { IRegion } from './region.interface';

export interface IAuthor extends IIdentifiable, IRegion, IProsable, ITaggable {
    firstName: string,
    lastName: string,
    linkedInProfile?: string
    articles?: IArticle[];
    email?: string;
}