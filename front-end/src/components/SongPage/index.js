import { useParams } from 'react-router-dom'
import { findSongComments } from '../../store/songs'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import CommentFormModal from '../CommentFormModal/index'

export default function SongPage({ all }) {
    const { songId } = useParams()
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(findSongComments(songId))
    }, [dispatch, songId])

    const song = all[songId]

    const comments = useSelector(state => state.music.comments)

    const userId = useSelector(store => store.session.user.id)

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
                        <div className='comment__container' key={comment.id}>{comment.User.username} says: {comment.text}</div>
                    )
                })}
            </ul>
            <CommentFormModal songId={songId} userId={userId}/>
        </>
    )
}
