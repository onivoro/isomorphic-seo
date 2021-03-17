import { IArticle } from "./article.interface";
import { IPage } from "./page.interface";

export interface IMagazine extends IArticle {
    pages: IPage[];
}
