import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect} from 'react'
import './UserPage.css'
import { findUser, findUserSongs } from '../../store/user'
import SongBlock from '../SongBlock'

export default function UserPage() {
    const { userId } = useParams()
    const dispatch = useDispatch()

    const currentUserId = useSelector(state => state.session.user.id)

    useEffect(() => {
        dispatch(findUser(userId))
    }, [dispatch, userId])

    const user = useSelector(state => state.userPage.user)

    useEffect(() => {
        dispatch(findUserSongs(userId))
    }, [dispatch, userId])

    const songs = useSelector(state => state.userPage.songs)

    const loggedUser = +userId === currentUserId

    return (
        <>
            <div>{user?.id === +userId && user?.username}</div>
            {user?.id === +userId && songs?.map(song => {
                return (
                    <SongBlock key={`${song.name}-`} song={song} className={'user__audio__cont'} owned={loggedUser} />
                )
            })}

        </>
    )
}
