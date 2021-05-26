import './Home.css'
import SongBlock from '../SongBlock'


export default function Home({ all, popular }) {

    return (
        <>
            <div className='home__title__cont'>
                <div className='home__title'>
                    Most Popular
                </div>
            </div>
            {Object.values(popular).map(song => {
                return (
                    <SongBlock key={`${song.name}-`} song={song} className={'home_audio'} />
                )
            })}
        </>
    )
}
