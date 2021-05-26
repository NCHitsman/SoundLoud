
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { uploadSong } from '../../store/user';
import {findAllSongs} from '../../store/songs'

const SongUpload = ({setShowSongModal}) => {
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
    dispatch(findAllSongs())
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor='name__input'>Title:</label>
        <input type='text' id='name__input' value={name} onChange={(e) => {setName(e.target.value)}}/>
        <input
          type="file"
          onChange={updateSong}
        />
        <button type="submit">Upload</button>
      </form>
    </>
  );
};

export default SongUpload;
