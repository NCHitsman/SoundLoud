import { csrfFetch } from './csrf'

const FIND_SONGS = 'songs/FIND_SONGS'
const FIND_POPULAR = 'songs/FIND_POPULAR'
const FIND_COMMENTS = 'songs/FIND_COMMENTS'

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

const findComments = (comments) => {
    return {
        type: FIND_COMMENTS,
        payload: comments
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

export const findSongComments = (songId) => async (dispatch) => {
    const response = await csrfFetch(`/api/songs/${songId}/comments`)
    const data = await response.json()
    dispatch(findComments(data))
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
            let counter = 0;
            newState = { ...state }
            newState.popular = {}
            action.payload.forEach(song => {
                newState.popular[counter] = song;
                counter++
            })
            return newState;
        case FIND_COMMENTS:
            let counterTwo = 0;
            newState = { ...state }
            newState.comments = {}
            action.payload.forEach(comment => {
                newState.comments[counterTwo] = comment;
                counterTwo++
            })
        return newState;
        default:
            return state;
    }
}



export default songReducer;
