import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createComment } from '../../store/songs'

export default function CommentForm( {songId, userId }) {
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            text,
            userId: userId,
            songId: songId,
        }

        console.log(payload)

        return dispatch(createComment(payload, songId));
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={text}
                onChange={(e) => { setText(e.target.value) }}>
                required
            </textarea>
            <button type='submit'>Submit</button>
        </form>
    )
}
