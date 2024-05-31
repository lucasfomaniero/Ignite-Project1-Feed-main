import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react';
interface CommentProps {
    imageURL: string;
    name: string;
    commentedAt: string;
    text: string;
}
export function Comment({imageURL, name, commentedAt, text}: CommentProps) {
    return (
        <div className={styles.comment} >
        <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/2254731?v=4" />
        <div className={styles.commentBox} >
          <div className={styles.commentContent} >
            <header>
              <div className={styles.authorAndTimes} >
                <strong>Diego Fernandes</strong>
                <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
              </div>
  
              <button title='Deletar'>
                <Trash size={24} />
              </button>
  
            </header>
  
            <p>Este é um comentário</p>
          </div>
  
          <footer>
            <button>
              <ThumbsUp/>
              Aplaudir
              <span>1</span>
            </button>
          </footer>
        </div>
      </div>
    )
}