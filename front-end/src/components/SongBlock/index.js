import './SongBlock.css'
import {Link} from 'react-router-dom'
import { deleteSong } from '../../store/songs'
import { useDispatch } from 'react-redux'
import { findUserSongs } from '../../store/user'

const SongBlock = ({song, className, owned}) => {

    const dispatch = useDispatch()

    return (
        <Link className={className} to={`/songs/${song.id}`}>
            <h4>{song.name}</h4>
            <audio controls src={song.link} />
            {owned && <button onClick={ async (e) => {
                e.preventDefault();
                await dispatch(deleteSong(song.id));
                await dispatch(findUserSongs(song.createdBy))
            }}>Delete Song</button>}
        </Link>
    )
}

export default SongBlock
