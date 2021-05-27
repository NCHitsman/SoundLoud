
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { uploadSong } from '../../store/user';
import { findAllSongs } from '../../store/songs'

const SongUpload = ({ setShowSongModal }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [song, setSong] = useState();
  const [name, setName] = useState()

  if (!user) return null;

  const updateSong = (e) => {
    setSong(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(uploadSong(song, user.id, name));
    await dispatch(findAllSongs())
    setShowSongModal(false)
  };

  return (
    <div className='form__cont modal__form'>
      <form className='form' onSubmit={submitHandler}>
        <div className='form__input__cont modal__form__input__cont'>Title:
        <input className='form__input' type='text' id='name__input' value={name} onChange={(e) => { setName(e.target.value) }} />
        </div>
        <div className='form__input__cont modal__form__input__cont'>Upload Song:
          <input
            className='form__input doc__input'
            type="file"
            onChange={updateSong}
          />
        </div>
        <button style={{backgroundColor: '#9F86C0'}} type="submit">Upload</button>
      </form>
    </div>
  );
};

export default SongUpload;
