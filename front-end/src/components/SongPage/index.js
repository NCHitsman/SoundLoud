import { useParams } from 'react-router-dom'
import { findSongComments, deleteComment } from '../../store/songs'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect} from 'react'
import CommentFormModal from '../CommentFormModal/index'

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
            <div>
                {song?.name}
            </div>
            <div>
                {song?.artist}
            </div>
            <div>
                {song?.User.username}
            </div>
            <audio controls src={song?.link} />
            <h3>Comments:</h3>
            <ul>
                {comments && Object.values(comments).map(comment => {
                    return (
                        <div key={comment.id}>
                            <div className='comment__container'>{comment.User.username} says: {comment.text}</div>
                            {userId === comment.User.id ?
                            <>
                                <CommentFormModal songId={songId} userId={userId} edit={true} commentId={comment.id}/>
                                <button onClick={(e) => commentDelete(comment.id)}>Delete Comment</button>
                            </> :
                            <div></div>}
                        </div>
                    )
                })}
            </ul>
            {userId && <CommentFormModal songId={songId} userId={userId} edit={false} commentId={false}/>}
        </>
    )
}
