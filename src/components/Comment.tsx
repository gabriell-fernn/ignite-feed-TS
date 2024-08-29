import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'; 
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
    content: string,
    onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0)
    
    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/gabriell-fernn.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriell Fernandes</strong>
                            <time title='28 de Agosto às 15:11' dateTime="2024-08-28 15:11:30">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Curtir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}