import { IArticle } from "./article.interface";

export interface IMagazine extends IArticle {
    articles: IArticle[];
}
