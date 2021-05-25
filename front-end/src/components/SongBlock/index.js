import './SongBlock.css'
import {Link} from 'react-router-dom'
import { deleteSong } from '../../store/songs'
import { useDispatch } from 'react-redux'

const SongBlock = ({song, className, owned}) => {

    const dispatch = useDispatch()

    return (
        <Link className={className} to={`/songs/${song.id}`}>
            <h4>{song.name}</h4>
            <audio controls src={song.link} />
            {owned && <button onClick={(e) => {
                e.preventDefault()
                dispatch(deleteSong(song.id))
            }}>Delete Song</button>}
        </Link>
    )
}

export default SongBlock
