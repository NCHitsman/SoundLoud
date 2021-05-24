import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createComment, editComment } from '../../store/songs'

const CommentForm = ( {songId, userId, setShowModal, edit, commentId }) => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    const handleSubmitNew = async (e) => {
        e.preventDefault();

        const payload = {
            text,
            userId: userId,
            songId: songId,
        }

        await dispatch(createComment(payload, songId));

        setShowModal(false)
    };

    const handleSubmitEdit = async (e) => {
        e.preventDefault();

        const payload = {
            text,
        }

        await dispatch(editComment(payload, commentId));

        setShowModal(false)
    }

    return (
        <form onSubmit={edit ? handleSubmitEdit : handleSubmitNew}>
            <textarea
                value={text}
                onChange={(e) => { setText(e.target.value) }}>
                required
            </textarea>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default CommentForm;
