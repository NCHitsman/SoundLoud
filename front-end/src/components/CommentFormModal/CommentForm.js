import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createComment, editComment } from '../../store/songs'
import './CommentFormModal.css'

const CommentForm = ({ songId, userId, setShowModal, edit, commentId, commentText }) => {
    const dispatch = useDispatch();
    const [text, setText] = useState(undefined);

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

    console.log(commentText)

    return (
        <div className='form__cont modal__form'>
            <form className='form' onSubmit={edit ? handleSubmitEdit : handleSubmitNew}>
                <div className='form__input__cont modal__form__input__cont'>Edit Comment:
                    <textarea
                        className='comment__edit__textarea form__input doc__input'
                        value={text}
                        onChange={(e) => { setText(e.target.value) }}
                        defaultValue={commentText}
                        required
                    ></textarea>
                </div>
                <button style={{backgroundColor: '#9F86C0'}} type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CommentForm;
