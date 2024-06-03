import { IComment } from "./IComment";
import { ContentType } from "./IContentType";

export interface IPost  {
    id: string;
    author: IAuthor;
    publishedAt: Date;
    content: ContentType[];
    comments: IComment[]
}