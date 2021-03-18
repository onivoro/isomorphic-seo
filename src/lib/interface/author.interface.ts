import { IIdentifiable } from '@onivoro/isomorphic-crud-provider';
import { IArticle } from './article.interface';

export interface IAuthor extends IIdentifiable {
    firstName: string,
    lastName: string,
    linkedInProfile?: string
    articles?: IArticle[];
    email?: string;
    title?: string;
    description?: string;
}