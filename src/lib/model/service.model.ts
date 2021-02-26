import { toSlug } from '../constant/to-slug';
import { INavigable } from '../interface/navigable.interface';
import { IOpenGraphable } from '../interface/open-graphable.interface';
import { ITaggable } from '../interface/taggable.interface';
import { Article } from "./article.model";
import { Image } from './image.model';

export class Service extends Article implements ITaggable, IOpenGraphable, INavigable {

    constructor(
        public readonly description: string,
        public readonly imageObject: Image,
        public readonly title: string,
        public readonly icon: string,
        public readonly additionalTags?: string[],
    ) {

        super(
            description,
            imageObject,
            description,
            `${toSlug(title)}`,
            title,
            );
    }

    get tags(): string[] {
        return [...this.additionalTags || [], this.title];
    }
}
