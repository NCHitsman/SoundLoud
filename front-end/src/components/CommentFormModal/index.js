import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CommentForm from './CommentForm';

function CommentFormModal({songId, userId, edit, commentId } ) {
  const [showModal, setShowModal] = useState(false);
  console.log(edit)

  return (
    <>
      {edit ?
      <button onClick={() => setShowModal(true)}>Edit Comment</button>
      :
      <button onClick={() => setShowModal(true)}>Write Comment</button>
      }
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CommentForm songId={songId} userId={userId} setShowModal={setShowModal} edit={edit} commentId={commentId} />
        </Modal>
      )}
    </>
  );
}

export default CommentFormModal;
