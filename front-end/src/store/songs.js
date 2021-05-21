import { csrfFetch } from './csrf'

const FIND_SONGS = 'songs/FIND_SONGS'
const FIND_POPULAR = 'songs/FIND_POPULAR'

const findSongs = (songs) => {
    return {
        type: FIND_SONGS,
        payload: songs
    }
}

const findPopular = (popular) => {
    return {
        type: FIND_POPULAR,
        payload: popular
    }
}

export const findAllSongs = () => async (dispatch) => {
    const response = await csrfFetch('/api/songs')
    const data = await response.json()
    dispatch(findSongs(data))
    return response
}

export const findPopularSongs = () => async (dispatch) => {
    const response = await csrfFetch('/api/songs/popular')
    const data = await response.json()
    dispatch(findPopular(data))
    return response
}

const songReducer = (state = {songs: {}, popular: {}}, action) => {
    let newState;
    switch (action.type) {
        case FIND_SONGS:
            newState = { ...state }
            newState.songs = {}
            action.payload.forEach(song => {
                newState.songs[song.id] = song;
            })
            return newState;
        case FIND_POPULAR:
            newState = { ...state }
            newState.popular = {}
            action.payload.forEach(song => {
                newState.popular[song.id] = song;
            })
            return newState;
        default:
            return state;
    }
}



export default songReducer;
