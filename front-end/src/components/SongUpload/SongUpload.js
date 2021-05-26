
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { uploadSong } from '../../store/user';

const SongUpload = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [song, setSong] = useState();
  const [name, setName] = useState()

  if (!user) return null;

  const updateSong = (e) => {
    setSong(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(uploadSong(song, user.id, name));
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label for='name__input'>Title:</label>
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
