import './SongBlock.css'
import { Link } from 'react-router-dom'
import { deleteSong } from '../../store/songs'
import { useDispatch } from 'react-redux'
import { findUserSongs } from '../../store/user'

const SongBlock = ({ song, className, owned }) => {

    const dispatch = useDispatch()

    return (
        <Link className={`audio__cont ${className}`} to={`/songs/${song.id}`}>
            <img className='s__logo' src='/soundcloudlogo.png'></img>
            <h4>{song?.name}</h4>
            <div className='song'>
                <div>
                    {'Artist: '}{song?.artist}
                </div>
                <div>
                    {'Posted By: '}
                    <Link className='song__creator' to={`/users/${song?.User?.id}`}>
                        {song?.User?.username}
                    </Link>
                </div>
                <div>
                    {'Views: '} {song?.views}
                </div>
                <div>
                    {'Category: '}{song?.Category?.name}
                </div>
            </div>

            <audio controls src={song.link} />
            {owned && <button onClick={async (e) => {
                e.preventDefault();
                await dispatch(deleteSong(song.id));
                await dispatch(findUserSongs(song.createdBy))
            }}>Delete Song</button>}
        </Link>
    )
}

export default SongBlock
