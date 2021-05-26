import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {findAllSongs} from '../../store/songs'
import { uploadSong } from '../../store/user';


const SongUpload = ({songId}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [song, setSong] = useState();

  if (!user) return null;

  const updateSong = (e) => {
    setSong(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(uploadSong(song, user.id, songId));
    dispatch(findAllSongs())
  };

  return (
    <>
      <form onSubmit={submitHandler}>
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
