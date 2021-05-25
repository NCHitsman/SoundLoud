import { useParams } from 'react-router-dom'
import { findSongComments, deleteComment } from '../../store/songs'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CommentFormModal from '../CommentFormModal/index'
import './SongPage.css'
import SongBlock from '../SongBlock'

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
        <div className='songPage'>
            <div className='songPage__cont'>

                <div className='song__info__cont'>

                    <div className='song__title__artist'>

                        <div className='textAlign songPage__info__title'>
                            {song?.name}
                            <div className='textAlign'>
                                <Link className='songPage__info__artist' to={`/users/${song?.User.id}`}>
                                    {song?.User.username}
                                </Link>
                            </div>
                        </div>

                    </div>


                    <div className='audioHolder'>
                        <audio className='songPage__audio' controls src={song?.link} />
                    </div>

                </div>

                <div className='song__comment__cont'>

                    <div className='comment__holder'>

                        <h3 className='comment__title'>Comments:</h3>
                        <div className=''>
                            {userId && <CommentFormModal songId={songId} userId={userId} edit={false} commentId={false} />}
                            {comments && Object.values(comments).map(comment => {
                                return (
                                    <div className='comment__li' key={comment.id}>
                                        <div className='comment__container textAlign'>{comment.User.username} says: {comment.text}</div>
                                        <div className='textAlign'>Created On: {comment.createdAt.slice(0, 10)}</div>
                                        {userId === comment.User.id ?
                                            <>
                                                <CommentFormModal songId={songId} userId={userId} edit={true} commentId={comment.id} />
                                                <button className='comment__button' onClick={(e) => commentDelete(comment.id)}>Delete Comment</button>
                                            </> :
                                            <div></div>}
                                    </div>
                                )
                            })}
                        </div>

                    </div>

                </div>

            </div>
            <div className='all__container cont' id='songPage-all-cont'>
                <div className='title'>
                    <h3>All Songs:</h3>
                </div>
                {Object.values(all).map(song => {
                    return (
                        <SongBlock key={`${song.name}-`} song={song} className={'song_audio'} />
                    )
                })}
            </div>
        </div>
    )
}
