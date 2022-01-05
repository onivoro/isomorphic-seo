import { IAuthor } from './author.interface';
import { IProsable } from "./prosable.interface";
import { IRegion } from './region.interface';

export interface IArticle extends IRegion, IProsable {
    authors?: IAuthor[];
    published?: boolean;
}
