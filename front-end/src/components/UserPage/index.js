import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect} from 'react'
import './UserPage.css'
import { findUser, findUserSongs } from '../../store/user'
import SongBlock from '../SongBlock'

export default function UserPage() {
    const { userId } = useParams()
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(findUser(userId))
    }, [dispatch, userId])

    const user = useSelector(state => state.userPage.user)

    useEffect(() => {
        dispatch(findUserSongs(userId))
    }, [dispatch, userId])

    const songs = useSelector(state => state.userPage.songs)

    console.log(songs)

    //if current is equal to logged in, do extra

    return (
        <>
            <div>{user?.username}</div>
            {songs?.map(song => {
                return (
                    <SongBlock key={`${song.name}-`} song={song} className={'user__audio__cont'} />
                )
            })}
        </>
    )
}
