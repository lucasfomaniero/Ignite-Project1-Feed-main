
import { Avatar } from './Avatar';
import style from './Post.module.css'
import {ptBR} from 'date-fns/locale/pt-BR';
import { format, formatDistanceToNow } from 'date-fns';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { IComment} from '../model/IComment';
import { PostComment } from './Comment';
import * as uuid from 'uuid';
import { ContentType } from '../model/IContentType';

export interface PostProps  {
    id: string;
    author: IAuthor;
    publishedAt: Date;
    content: ContentType[];
    comments: IComment[];
  }

export function Post({id, author, publishedAt, content, comments }: PostProps) {
    const [listOfComments, setComments] = useState<IComment[]>(comments);


    useEffect(() => {
        const handleKeyDown = (event: { metaKey: any; key: string; preventDefault: () => void; }) => {
            if (event.metaKey && event.key === 'Enter') {
                event.preventDefault();
                handleCreateNewComment();
            }
        }
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [])

    //TextArea Text
    const [newCommentText, setNewCommentText] = useState<string>('');
    const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setNewCommentText(event.target.value);
    }
    const handleCreateNewComment = () => {
        event?.preventDefault()
        const newPostComment: IComment = {
            id: uuid.v4(),
            imageURL: author.avatarUrl,
            name: author.name,
            commentedAt: format(new Date(), "d 'de' LLLL 'às' HH:mm", {
                locale: ptBR,
            }),
            text: newCommentText,
        }
        setNewCommentText('');
        setComments([...listOfComments, newPostComment]);
    }

    const deleteComment = (id: string) => {
      const filteredComments = listOfComments.filter(comment => comment.id !== id);
      setComments(filteredComments);
    }

    const options: Intl.DateTimeFormatOptions = { 
        weekday: 'long', // Nome completo do dia da semana
        year: 'numeric', // Ano completo
        month: 'long', // Nome completo do mês
        day: 'numeric', // Dia do mês
        hour: 'numeric', // Hora
        minute: 'numeric' // Minutos
      };

      const publishDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
        locale: ptBR,
        });

        const relativeDate = formatDistanceToNow(publishedAt, {
            locale: ptBR,
            addSuffix: true,
        })
    return (
        <div key={id}>
        <article className={style.post}>
            <header>
                <div className={style.header}>
                <div className={style.author}>
                    <Avatar src='https://github.com/hoffsilva.png' />
                    <div className={style.authorInformation}>
                        <strong>{author.name}</strong>
                        <span className={style.authorRole}>{author.role}</span>
                    </div>
                </div>
                <time dateTime={publishedAt.toISOString()} title={publishDateFormatted} >{relativeDate}</time>
                </div>
            </header>
            <div className={style.content}>
               {content.map(line => {
                return line.type === 'paragraph'? <p key={line.content}>{line.content}</p> : <p key={line.content}><a href={"https://" + line.content}>{line.content}</a></p>
               })}
            </div>
            
            <form onSubmit={handleCreateNewComment} className={style.commentForm}>
                <strong>Deixe seu comentário</strong>
                    <textarea value={newCommentText} onChange={handleTextChange} placeholder="Digite aqui seu comentário" rows={4}></textarea>
                <footer>
                    <button type="submit" >Publicar</button>
                </footer>
            </form>
        </article>
        <div>
            {listOfComments.map(comment => {
                return <PostComment
                key={comment.id} 
                id={comment.id}
                imageURL={comment.imageURL}
                name={comment.name} 
                commentedAt={comment.commentedAt} 
                text={comment.text}
                deleteComment={deleteComment}
            />
            })}
            
            
        </div>
        </div>
    )
}