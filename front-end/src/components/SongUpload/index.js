import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SongUpload from './SongUpload';

function SongUploadModal({songId}) {
    const [showSongModal, setShowSongModal] = useState(false);

    return (
        <>
            <button className='nav__button' onClick={(e) => {
                e.preventDefault()
                setShowSongModal(true)
            }}>Upload New Song</button>
            {showSongModal && (
                <Modal onClose={(e) => {
                    e.preventDefault()
                    setShowSongModal(false)
                }}>
                    <SongUpload songId={songId} setShowSongModal={setShowSongModal} />
                </Modal>
            )}
        </>
    );
}

export default SongUploadModal;
