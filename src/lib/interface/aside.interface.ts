import { IBulletList } from "./bullet-list.interface";
import { IImage } from "./image.interface";
import { IOrderable } from "./orderable.interface";
import { IParagraph } from "./paragraph.interface";

export interface IAside extends IOrderable {
    bulletLists?: IBulletList[];
    images?: IImage[];
    paragraphs?: IParagraph[];
    title?: string;
}
