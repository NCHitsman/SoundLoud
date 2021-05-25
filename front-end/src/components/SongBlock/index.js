import './SongBlock.css'
import { Link } from 'react-router-dom'
import { deleteSong } from '../../store/songs'
import { useDispatch } from 'react-redux'
import { findUserSongs } from '../../store/user'
import {useHistory} from 'react-router-dom'

const SongBlock = ({ song, className, owned }) => {
    const history = useHistory()
    const dispatch = useDispatch()

    return (
        <Link className={`audio__cont ${className}`} to={`/songs/${song.id}`}>
            <img className='s__logo' src='/soundcloudlogo.png'></img>
            <div>
                <div className='song__info'>
                    <h2 className='song__info__title'>{song?.name}
                        <div className='song__info__artist' onClick={(e) => {
                            e.preventDefault()
                            history.push(`/Users/${song.User.id}`)
                        }}>
                            {song?.User.username}
                        </div>
                    </h2>
                    <div className='song__info__sub'>
                        <div>
                            {'Views: '} {song?.views}
                        </div>
                        <div>
                            {'Category: '}{song?.Category?.name}
                        </div>
                    </div>
                </div>

                <audio className='audio__bar' controls src={song.link} />
            </div>
            {owned && <button onClick={async (e) => {
                e.preventDefault();
                await dispatch(deleteSong(song.id));
                await dispatch(findUserSongs(song.createdBy))
            }}>Delete Song</button>}
        </Link>
    )
}

export default SongBlock
