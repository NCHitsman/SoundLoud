import './Home.css'
import { Link } from 'react-router-dom'


export default function Home({ all, popular }) {

    return (
        <div className='section__container'>
            <div className='all__container cont'>
                <div className='title'>
                    <h3>All Songs:</h3>
                </div>
                {Object.values(all).map(song => {
                    return (
                        <Link className='audio__cont' key={`${song.name}-`} to={`/songs/${song.id}`}>
                            <audio controls src={song.link} />
                        </Link>
                    )
                })}
            </div>
            <div className='popular__container cont'>
                <div className='title'>
                    <h3>Popular: </h3>
                </div>
                {Object.values(popular).map(song => {
                    return (
                        <Link className='audio__cont' key={`${song.name}+`} to={`/songs/${song.id}`}>
                            <audio controls src={song.link} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
