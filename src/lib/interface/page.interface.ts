import { IMagazine } from "./magazine.interface";
import { IOpenGraphable } from "./open-graphable.interface";
import { IProsable } from "./prosable.interface";

export interface IPage extends IProsable, IOpenGraphable {
    magazines: IMagazine[];
    metatags?: any;
    structuredData?: any;
    lastUpdatedAt?: string;
    lastUpdatedBy?: string;
    createdAt?: string;
    createdBy?: string;
}
