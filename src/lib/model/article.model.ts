import { OpenGraphObjectType } from '../enum/open-graph-object-type.enum';
import { Author } from './author.model';
import { Image } from './image.model';
import { Region } from './region.model';

const type = OpenGraphObjectType.article;
export class Article extends Region {
    type = type;
    constructor(
        public readonly description: string,
        public readonly imageObject: Image,
        public readonly label: string,
        public readonly slug: string,
        public readonly title: string,
        public readonly authors?: Author[],
        public readonly host?: string,
        public readonly pathOverride?: string,
    ) {
        super(
            description,
            'info',
            imageObject,
            label,
            pathOverride || slug,
            title,
            type,
        );

    }

    get hostAndPathSeparator () {
        return this.host ? `${this.host}/` : '';
    }

    get url () {
        return `${this.hostAndPathSeparator}${this.slug}`;
    }

    // get label(): string {
    //     return this.description;
    // }

    // get slug(): string {
    //     return toSlug(this.description);
    // }

    // article:published_time - datetime - When the article was first published.
    // article:modified_time - datetime - When the article was last changed.
    // article:expiration_time - datetime - When the article is out of date after.
    // article:author - profile array - Writers of the article.
    // article:section - string - A high-level section name. E.g. Technology
    // article:tag - string array - Tag words associated with this article.
}
