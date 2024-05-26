import { ReactNode } from 'react';
import styles from './Feed.module.css'
interface FeedProps {
    children: ReactNode;
}

export function Feed({children}: FeedProps) {
    return (
        <main className={styles.feed}>
            {children}
        </main>
    )
}
  