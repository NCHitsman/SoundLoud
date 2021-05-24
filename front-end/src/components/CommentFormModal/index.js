import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CommentForm from './CommentForm';

function CommentFormModal({songId, userId } ) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Write Comment</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CommentForm songId={songId} userId={userId} />
        </Modal>
      )}
    </>
  );
}

export default CommentFormModal;
