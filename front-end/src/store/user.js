import { csrfFetch } from './csrf'

const FIND_USER = 'user/FIND_USER'
const FIND_USER_SONGS = 'user/FIND_USER_SONGS'
const SET_IMAGE = 'images/SET_IMAGE';

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

const setImage = (song) => ({
    type: SET_IMAGE,
    payload: song,
});

export const uploadImage = (imageData, userId, songId) => async (dispatch) => {
    const formData = new FormData();
    formData.append("image", imageData);
    formData.append("userId", userId);
    formData.append('songId', songId)
    const res = await csrfFetch('/api/images', {
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        body: formData,
    });
    const data = await res.json();
    dispatch(setImage(data));
};

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

    switch (action.type) {
        case FIND_USER:
            newState.user = action.payload
            return newState
        case FIND_USER_SONGS:
            newState = { ...state, songs: { ...state.songs } }
            action.payload.forEach(song => {
                newState.songs[song.id] = song
            })
            return newState
        case SET_IMAGE:
            newState = { ...state, songs: { ...state.songs } }
            newState.songs[action.payload.id] = action.payload
            return newState
        default:
            return state
    }
}

    export default userReducer
