import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CommentForm from './CommentForm';
import './CommentFormModal.css'

function CommentFormModal({songId, userId, edit, commentId, commentText } ) {
  const [showModal, setShowModal] = useState(false);
  console.log(edit)

  return (
    <>
      {edit ?
      <button className='comment__button' onClick={() => setShowModal(true)}>Edit Comment</button>
      :
      <button className='comment__button' onClick={() => setShowModal(true)}>Write Comment</button>
      }
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CommentForm songId={songId} userId={userId} setShowModal={setShowModal} edit={edit} commentId={commentId} commentText={commentText} />
        </Modal>
      )}
    </>
  );
}

export default CommentFormModal;
