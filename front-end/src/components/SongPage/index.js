import { useParams } from 'react-router-dom'
import { findSongComments, deleteComment } from '../../store/songs'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CommentFormModal from '../CommentFormModal/index'
import './SongPage.css'

export default function SongPage({ all }) {
    const { songId } = useParams()
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(findSongComments(songId))
    }, [dispatch, songId])

    const song = all[songId]

    const comments = useSelector(state => state.music.comments)

    const userId = useSelector(store => store.session.user ? store.session.user.id : false)

    const commentDelete = (commentId) => {
        dispatch(deleteComment(commentId))
    }

    return (
        <>
            <div className='textAlign'>
                Song Name: {song?.name}
            </div>
            <div className='textAlign'>
                <Link to={`/users/${song?.User.id}`}>
                    {'Artist: '}{song?.User.username}
                </Link>
            </div>

            <div className='audioHolder'>
                <audio controls src={song?.link} />
            </div>
            <div className='comment__holder'>
                <h3 className='comment__title'>Comments:</h3>
                <ul className='class__ul'>
                    {comments && Object.values(comments).map(comment => {
                        return (
                            <li className='comment__li' key={comment.id}>
                                <div className='comment__container textAlign'>{comment.User.username} says: {comment.text}</div>
                                <div className='textAlign'>Created On: {comment.createdAt.slice(0, 10)}</div>
                                {userId === comment.User.id ?
                                    <>
                                        <CommentFormModal songId={songId} userId={userId} edit={true} commentId={comment.id} />
                                        <button className='comment__button' onClick={(e) => commentDelete(comment.id)}>Delete Comment</button>
                                    </> :
                                    <div></div>}
                            </li>
                        )
                    })}
                </ul>
                {userId && <CommentFormModal songId={songId} userId={userId} edit={false} commentId={false} />}
            </div>
        </>
    )
}
