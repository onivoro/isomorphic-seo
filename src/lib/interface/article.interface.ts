import { IParagraph } from "./paragraph.interface";

export interface IArticle {
    title: string;
    asides: IParagraph[];
    paragraphs: IParagraph[];
}
