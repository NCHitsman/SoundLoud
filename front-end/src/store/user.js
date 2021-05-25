import { csrfFetch } from './csrf'

const FIND_USER = 'user/FIND_USER'
const FIND_USER_SONGS = 'user/FIND_USER_SONGS'

const findAUser = (user) => {
    return {
        type: FIND_USER,
        payload: user
    }
}

const findAUsersSongs = (songs) => {
    return {
        type: FIND_USER_SONGS,
        payload: songs
    }
}

export const findUser = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}`)
    const data = await response.json()
    dispatch(findAUser(data))
    return response
}

export const findUserSongs = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/songs/${userId}`)
    const data = await response.json()
    dispatch(findAUsersSongs(data))
    return response
}

const userReducer = (state = {}, action) => {
    let newState = {};

    switch(action.type) {
        case FIND_USER:
            newState.user = action.payload
            return newState
        case FIND_USER_SONGS:
            newState = {...state}
            newState.songs = action.payload
            return newState
        default:
            return state
    }
}

export default userReducer
