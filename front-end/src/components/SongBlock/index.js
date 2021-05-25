import './SongBlock.css'
import {Link} from 'react-router-dom'

const SongBlock = ({song, className}) => {

    return (
        <Link className={className} to={`/songs/${song.id}`}>
            <h4>{song.name}</h4>
            <audio controls src={song.link} />
        </Link>
    )
}

export default SongBlock
