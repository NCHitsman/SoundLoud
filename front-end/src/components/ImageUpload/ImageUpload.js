import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {findAllSongs} from '../../store/songs'
import { uploadImage } from '../../store/user';


const ImageUpload = ({songId, setShowModal}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [image, setImage] = useState();

  if (!user) return null;

  const updateImage = (e) => {
    setImage(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(uploadImage(image, user.id, songId));
    await dispatch(findAllSongs())
    setShowModal(false)
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="file"
          onChange={updateImage}
          onClick={(e) => e.stopPropagation()}
        />
        <button type="submit" onClick={(e) => {e.stopPropagation()}}>Upload</button>
      </form>
    </>
  );
};

export default ImageUpload;
