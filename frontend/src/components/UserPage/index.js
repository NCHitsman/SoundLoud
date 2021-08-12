import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import './UserPage.css'
import { findUser, findUserSongs } from '../../store/user'
import SongBlock from '../SongBlock'

export default function UserPage() {
    const { userId } = useParams()
    const dispatch = useDispatch()

    const currentUserId = useSelector(state => state.session?.user?.id)

    useEffect(() => {
        dispatch(findUser(userId))
        dispatch(findUserSongs(userId))
    }, [dispatch, userId])

    const user = useSelector(state => state.userPage.user)

    const songs = useSelector(state => state.userPage.songs)

    const loggedUser = +userId === currentUserId


    return (
        <>
            <div className='home__title__cont'>
                <div className='home__title'>{user?.id === +userId && user?.username}</div>
            </div>

            {user?.id === +userId && songs && Object.values(songs).map(song => {
                return (
                    <SongBlock key={`${song.name}-`} song={song} className={'user_audio'} owned={loggedUser} />
                )
            })}

        </>
    )
}
