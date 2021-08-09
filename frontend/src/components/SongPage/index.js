import { useParams } from 'react-router-dom'
import { findSongComments, deleteComment } from '../../store/songs'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CommentFormModal from '../CommentFormModal/index'
import './SongPage.css'
import { createComment } from '../../store/songs'


export default function SongPage({ all }) {
    const { songId } = useParams()
    const dispatch = useDispatch()
    const [text, setText] = useState(undefined);


    useEffect(() => {
        dispatch(findSongComments(songId))
    }, [dispatch, songId])

    const song = all[songId]

    const comments = useSelector(state => state.music.comments)

    const userId = useSelector(store => store.session.user ? store.session.user.id : false)


    const commentDelete = (commentId) => {
        dispatch(deleteComment(commentId))
    }

    const handleSubmitNew = async (e) => {
        e.preventDefault();

        const payload = {
            text,
            userId: userId,
            songId: songId,
        }

        await dispatch(createComment(payload, songId));

        setText('')
    };

    return (
        <div className='songPage__cont'>

            <div className='song__info__cont'>

                <div className='song__title__artist'>

                    <img alt='song cover' id='songPage__img' className='s__logo' src={song?.cover}></img>

                    <div className='songPage__info__child__cont'>
                        <div className='songPage__title__artist__cont'>
                            <div className='textAlign songPage__info__title'>
                                {song?.name}
                            </div>
                            <Link className='songPage__info__artist' to={`/users/${song?.User.id}`}>
                                {song?.User.username}
                            </Link>
                        </div>
                        <div className='songPage__info__artist__cont'>
                            <div className='songPage__info__views'>
                                Views: {song?.views}
                            </div>
                            <div className='songPage__info__artist'>
                                {song?.Category.name}
                            </div>
                        </div>
                    </div>

                </div>


                <div className='audioHolder'>
                    <audio className='songPage__audio' controls src={song?.link} />
                </div>

            </div>

            <div className={'song__comment__cont'}>

                <div className='comment__holder'>

                    <div className='li__comment__holder'>
                        {comments && Object.values(comments).map(comment => {
                            return (
                                <div className='comment__li' key={comment.id}>
                                    <div className='comment__container comment_text'>{comment.text}</div>

                                    <div className='comment__info__cont'>
                                        <Link className='comment__info__box comment__author' to={`/Users/${comment.User.id}`}>{comment.User.username}</Link>

                                        {userId === comment.User.id ? //buttons
                                            <div className='comment__info__box comment__buttons'>
                                                <CommentFormModal songId={songId} userId={userId} edit={true} commentId={comment.id} commentText={comment.text} />
                                                <button className='comment__button' onClick={(e) => commentDelete(comment.id)}>Delete Comment</button>
                                            </div> :
                                            <div></div>
                                        }


                                        <div className='comment__info__box comment__createdOn'>Created On: {comment.createdAt.slice(0, 10)}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>


            <div className='write__comment__cont'>
                {userId && <form className='songPage__comment__form' onSubmit={handleSubmitNew}>
                    <textarea
                        className='songPage__comment__textarea'
                        value={text}
                        onChange={(e) => { setText(e.target.value) }}
                        required
                        placeholder='Write your comment here'
                    ></textarea>
                    <button style={{ backgroundColor: '#9F86C0' }} className='songPage__comment__button' type='submit'>Submit</button>
                </form>}
            </div>

        </div>
    )
}
