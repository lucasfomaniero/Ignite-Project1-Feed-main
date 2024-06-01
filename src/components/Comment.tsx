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
        <Avatar hasBorder={false} src={imageURL} />
        <div className={styles.commentBox} >
          <div className={styles.commentContent} >
            <header>
              <div className={styles.authorAndTimes} >
                <strong>{name}</strong>
                <time title={commentedAt} dateTime="2022-05-11 08:13:30">{commentedAt}</time>
              </div>
  
              <button title='Deletar'>
                <Trash size={24} />
              </button>
  
            </header>
  
            <p>{text}</p>
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