import { OpenGraphObjectType } from "../enum/open-graph-object-type.enum";
import { IArticle } from "../interface/article.interface";


export function articleFactory(props: Partial<IArticle>, host: string): IArticle {
    const {description, url, slug, label, title, keywords, icon} = props;

    const route = url || (host + slug);
    
    const article: IArticle = {
        label: label || title,
        title,
        description,
        url: route,
        slug,
        icon: icon || 'article',
        image: host + (props?.image),
        keywords,
        type: OpenGraphObjectType.article,
    };
        
    return article
}