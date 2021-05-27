import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ImageUpload from './ImageUpload';

function ImageUploadModal({songId}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={(e) => {
                e.preventDefault()
                setShowModal(true)
            }}>Edit Cover</button>
            {showModal && (
                <Modal onClose={(e) => {
                    e.preventDefault()
                    setShowModal(false)
                }}>
                    <ImageUpload songId={songId} setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default ImageUploadModal;
