
import { Avatar } from './Avatar';
import style from './Post.module.css'
import { Comment } from './Comment';

interface PostProps  {
    author: string;
    content: string;
}
export function Post({ author, content }: PostProps) {
    return (
        <>
        <article className={style.post}>
            <header>
                <div className={style.header}>
                <div className={style.author}>
                    <Avatar src='https://github.com/hoffsilva.png' />
                    <div className={style.authorInformation}>
                        <strong>{author}</strong>
                        <span className={style.authorHole}>{author}</span>
                    </div>
                </div>
                <time dateTime="2024-05-26 12:13:14" title="26 de maio de 2024 às 12:13" >Publicado há 1h</time>
                </div>
            </header>
            <div className={style.content}>
                <p>Fala galera  👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>
                <a href="">jane.design/doctorcare</a>
                <p><a href="">#novoprojeto</a>
                 <a href="">#nlw</a>
                 <a href="">#rocketseat</a></p>
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
            <Comment 
                imageURL='https://avatars.githubusercontent.com/u/25959443?v=4' 
                name='Devon' 
                commentedAt='Há 2 horas' 
                text='este é o texto do comentário'
            />
            <Comment 
                imageURL='https://avatars.githubusercontent.com/u/25959443?v=4' 
                name='Devon' 
                commentedAt='Há 2 horas' 
                text='este é o texto do comentário'
            />
            
        </div>
        </>
    )
}