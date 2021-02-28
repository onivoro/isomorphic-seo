import { OpenGraphObjectType } from "../enum/open-graph-object-type.enum";

export interface IOpenGraphable {
    description: string;
    image?: string;
    title: string;
    type: OpenGraphObjectType;
    url?: string;
}
