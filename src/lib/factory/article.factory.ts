import { OpenGraphObjectType } from "../enum/open-graph-object-type.enum";
import { IArticle } from "../interface/article.interface";


export function articleFactory(props: Partial<IArticle>, host?: string): IArticle {
    const {description, url, title, keywords} = props;

    const route = host ? (host + url) : url;
    
    const article: IArticle = {
        title,
        description,
        url: route,
        image: host + (props?.image),
        keywords,
        type: OpenGraphObjectType.article,
    };
        
    return article
}