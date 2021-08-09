import './SongBlock.css'
import { Link } from 'react-router-dom'
import { deleteSong } from '../../store/songs'
import { useDispatch } from 'react-redux'
import { findUserSongs } from '../../store/user'
import { useHistory } from 'react-router-dom'
import ImageUploadModal from '../ImageUpload'
import { findAllSongs } from '../../store/songs'

const SongBlock = ({ song, className, owned }) => {
    const history = useHistory()
    const dispatch = useDispatch()


    return (
        <div className='parent__audio__cont'>
            <Link className={`audio__cont ${className}`} to={`/songs/${song.id}`}>
                <img className='s__logo' alt='song cover' src={song.cover ? song.cover : '/soundcloudlogo.png'}></img>
                <div>
                    <div className='song__info'>
                        <div className='song__info__title'>{

                            song?.name.length > 35 ? song?.name.slice(0,39) + '...' : song?.name

                            }
                            <div className='song__info__artist__cont'>
                                <div className='song__info__artist' onClick={(e) => {
                                    e.preventDefault()
                                    history.push(`/Users/${song.User.id}`)
                                }}>
                                    {song?.User?.username}
                                </div>
                                <div className='song__info__artist'>{song?.Category?.name}</div>
                            </div>
                        </div>
                        <audio className='audio__bar' controls src={song.link} />
                        <div className='user__song__func__buttons' >
                            <div>Views: {song?.views}</div>
                            {owned && <ImageUploadModal songId={song.id} />}
                            {owned && <button onClick={async (e) => {
                                e.preventDefault();
                                await dispatch(deleteSong(song.id));
                                dispatch(findUserSongs(song.createdBy))
                                dispatch(findAllSongs())
                            }}>Delete Song</button>}
                        </div>
                    </div>

                </div>
            </Link>

        </div>
    )
}

export default SongBlock
