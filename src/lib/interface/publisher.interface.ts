import { IAuthor } from './author.interface';
import { IMagazine } from './magazine.interface';

export interface IPublisher extends IAuthor {
    magazines?: IMagazine[];
}