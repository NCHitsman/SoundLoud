import './Home.css'
import SongBlock from '../SongBlock'


export default function Home({ all, popular }) {

    return (
        <div className='section__container'>
            <div className='all__container cont'>
                <div className='title'>
                    <h3>All Songs:</h3>
                </div>
                {Object.values(all).map(song => {
                    return (
                        <SongBlock key={`${song.name}-`} song={song} className={'audio__cont'} />
                    )
                })}
            </div>
            <div className='popular__container cont'>
                <div className='title'>
                    <h3>Popular: </h3>
                </div>
                {Object.values(popular).map(song => {
                    return (
                        <SongBlock key={`${song.name}-`} song={song} className={'audio__cont'} />
                    )
                })}
            </div>
        </div>
    )
}
