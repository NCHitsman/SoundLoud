import './Home.css'

export default function Home({ all, popular }) {


    return (
        <>
            <div className='all__container'>
                {all.map(song => {
                    return (
                        <songContainer song={song} />
                    )
                })}
            </div>
            <div className='popular__container'>
                {popular.map(song => {
                    return (
                        <songContainer song={song} />
                    )
                })}
            </div>
        </>
    )
}
