import { Article } from "./article.model";

export class Author {
    constructor(
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly linkedInProfile?: string
    ) {}

    articles?: Article[];
}