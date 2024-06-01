
import { Avatar } from './Avatar';
import style from './Post.module.css'
import { Comment } from './Comment';
import { IPost } from '../model/IPost';
import { PostProps } from '../App';

export function Post({id, author, publishedAt, content, comments }: PostProps) {
    const options: Intl.DateTimeFormatOptions = { 
        weekday: 'long', // Nome completo do dia da semana
        year: 'numeric', // Ano completo
        month: 'long', // Nome completo do mês
        day: 'numeric', // Dia do mês
        hour: 'numeric', // Hora
        minute: 'numeric' // Minutos
      };
    return (
        <>
        <article key={id} className={style.post}>
            <header>
                <div className={style.header}>
                <div className={style.author}>
                    <Avatar src='https://github.com/hoffsilva.png' />
                    <div className={style.authorInformation}>
                        <strong>{author.name}</strong>
                        <span className={style.authorRole}>{author.role}</span>
                    </div>
                </div>
                <time dateTime={publishedAt.toDateString()} title={publishedAt.toDateString()} >{publishedAt.toLocaleDateString('pt-BR', options)}</time>
                </div>
            </header>
            <div className={style.content}>
               <p>{content.map(line => {
                return line.type === 'paragraph'? <p>{line.content}</p> : <a href={"https://" + line.content}>{line.content}</a>
               })}</p>
            </div>
            
            <form className={style.commentForm}>
                <strong>Deixe seu comentário</strong>
                    <textarea placeholder="Digite aqui seu comentário" rows={4}></textarea>
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
        </article>
        <div>
            {comments.map(comment => {
                return <Comment 
                imageURL={comment.imageURL}
                name={comment.name} 
                commentedAt={comment.commentedAt} 
                text={comment.text}
            />
            })}
            
            
        </div>
        </>
    )
}