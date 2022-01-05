import { IArticle } from './article.interface';
import { IOpenGraphable } from './open-graphable.interface';

export interface IAuthor extends IOpenGraphable {
    firstName: string,
    lastName: string,
    linkedInProfile?: string
    articles?: IArticle[];
    email?: string;
}