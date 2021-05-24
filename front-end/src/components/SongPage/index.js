import { useParams } from 'react-router-dom'
import {findSongComments} from '../../store/songs'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

export default function SongPage ({ all }) {
    const { songId } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findSongComments(songId))
    },[dispatch])

    const song = all[songId]

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
                <li>hi</li>
            </ul>
        </>
    )
}
