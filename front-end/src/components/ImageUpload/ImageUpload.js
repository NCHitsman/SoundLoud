import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { uploadImage } from '../../store/user';

const ImageUpload = ({songId}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [image, setImage] = useState();

  if (!user) return null;

  const updateImage = (e) => {
    setImage(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(uploadImage(image, user.id, songId));
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="file"
          onChange={updateImage}
        />
        <button type="submit">Upload</button>
      </form>
    </>
  );
};

export default ImageUpload;
