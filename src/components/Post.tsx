
import { Avatar } from './Avatar';
import style from './Post.module.css'
interface PostProps  {
    author: string;
    content: string;
}
export function Post({ author, content }: PostProps) {
    return (
        <article className={style.post}>
            <header>
                <div className={style.header}>
                <div className={style.author}>
                    <Avatar src='https://avatars.githubusercontent.com/u/25959443?v=4' />
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
            <div className={style.commentSection}>
                <strong>Deixe seu comentário</strong>
                <form>
                    <textarea placeholder="Comentário" rows={4}></textarea>
                    <button type="submit">Publicar</button>
                </form>
            </div>

        </article>
    )
}