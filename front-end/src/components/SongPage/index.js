import { useParams } from 'react-router-dom'

export default function SongPage ({ all }) {
    const { songId } = useParams()

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
        </>
    )
}
