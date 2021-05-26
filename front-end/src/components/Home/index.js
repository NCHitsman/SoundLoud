import './Home.css'
import SongBlock from '../SongBlock'


export default function Home({ all, popular }) {

    return (
        <div className=''>
            <div className=''>
                <div className='title'>
                    <h3>Popular: </h3>
                </div>
                {Object.values(popular).map(song => {
                    return (
                        <SongBlock key={`${song.name}-`} song={song} className={'home_audio'} />
                    )
                })}
            </div>
        </div>
    )
}
