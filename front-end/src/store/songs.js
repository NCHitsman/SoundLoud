import { csrfFetch } from './csrf'

const FIND_SONGS = 'songs/FIND_SONGS'
const FIND_POPULAR = 'songs/FIND_POPULAR'
const FIND_COMMENTS = 'songs/FIND_COMMENTS'
const ADD_COMMENT = 'songs/ADD_COMMENT'
let counterTwo = 10000;

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

const createComments = (comment) => {
    return {
        type: ADD_COMMENT,
        payload: comment
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

export const createComment = (newComment, songId) => async (dispatch) => {
    const response = await csrfFetch(`/api/songs/${songId}/createComment`, {
        method: 'POST',
        body: JSON.stringify(newComment)
    })
    const data = await response.json()
    dispatch(createComments(data))
    return response
}

export const editComment = (text, commentId) => async (dispatch) => {
    const response = await csrfFetch(`/api/songs/editComment/${commentId}`, {
        method: 'PUT',
        body: JSON.stringify(text)
    })
    const data = await response.json()
    dispatch(findComments(data))
    return response
}

export const deleteComment = (commentId) => async (dispatch) => {
    const response = await csrfFetch(`/api/songs/deleteComment/${commentId}`, {
        method: 'DELETE'
    })
    const data = await response.json()
    dispatch(findComments(data))
    return response
}

export const deleteSong = (songId) => async (dispatch) => {
    const response = await csrfFetch(`/api/songs/delete/${songId}`, {
        method: 'DELETE'
    })
    const data = await response.json()
    dispatch(findSongs(data))
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
            let counter = 0;
            newState = { ...state }
            newState.popular = {}
            action.payload.forEach(song => {
                newState.popular[counter] = song;
                counter++
            })
            return newState;
        case FIND_COMMENTS:
            newState = { ...state }
            newState.comments = {}
            action.payload.forEach(comment => {
                newState.comments[counterTwo] = comment;
                counterTwo--
            })
            return newState;
        case ADD_COMMENT:
            newState = { ...state, comments: {...state.comments} }
            newState.comments[counterTwo] = action.payload;
            counterTwo--
            return newState;
        default:
            return state;
    }
}



export default songReducer;
