import { IArticle } from './article.interface';

export interface IAuthor {
    firstName: string,
    lastName: string,
    linkedInProfile?: string
    articles?: IArticle[];
    email?: string;
}