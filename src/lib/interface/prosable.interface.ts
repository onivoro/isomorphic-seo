import { IAside } from "./aside.interface";
import { IBulletList } from "./bullet-list.interface";
import { IHeading } from "./heading.interface";
import { IImage } from "./image.interface";
import { IOrderable } from "./orderable.interface";
import { IParagraph } from "./paragraph.interface";

export interface IProsable extends IOrderable {
    asides?: IAside[];
    bulletLists?: IBulletList[];
    images?: IImage[];
    headings?: IHeading[];
    paragraphs?: IParagraph[];
    title: string;
}