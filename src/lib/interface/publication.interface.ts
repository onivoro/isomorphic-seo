import { IArticle } from "./article.interface";
import { IAuthor } from "./author.interface";

export interface IPublication extends IArticle {
    authors: IAuthor[];
}
