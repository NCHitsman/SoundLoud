import './Home.css'
import SongBlock from '../SongBlock'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { clearComments } from '../../store/songs'
import { clearUserPage } from '../../store/user'


export default function Home({ popular }) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearComments())
        dispatch(clearUserPage())
    }, [dispatch])

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
