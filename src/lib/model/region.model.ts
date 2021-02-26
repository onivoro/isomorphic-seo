import { Image } from './image.model';

import { INavigable } from '../interface/navigable.interface';
import { IOpenGraphable } from '../interface/open-graphable.interface';

export abstract class Region implements IOpenGraphable, INavigable {
    constructor(
        public readonly description: string,
        public readonly icon: string,
        public readonly imageObject: Image,
        public readonly label: string,
        public readonly path: string,
        public readonly title: string,
        public readonly type: string,
    ) {
    }

    abstract slug: string;
    abstract url: string;

    get image() {
        return this.imageObject.url;
    }

}
