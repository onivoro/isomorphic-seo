import { OpenGraphObjectType } from '../enum/open-graph-object-type.enum';
import { IOpenGraphable } from '../interface/open-graphable.interface';
import { ITaggable } from '../interface/taggable.interface';

export class Image implements IOpenGraphable, ITaggable {
    type = OpenGraphObjectType.image;
    image = this.url;
    constructor(
        public readonly url: string,
        public readonly title: string,
        public readonly description: string,
        public readonly tags: string[]
    ) { }

    // article:published_time - datetime - When the article was first published.
    // article:modified_time - datetime - When the article was last changed.
    // article:expiration_time - datetime - When the article is out of date after.
    // article:author - profile array - Writers of the article.
    // article:section - string - A high-level section name. E.g. Technology
    // article:tag - string array - Tag words associated with this article.
}
