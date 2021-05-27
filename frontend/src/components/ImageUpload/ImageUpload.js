import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findAllSongs } from '../../store/songs'
import { uploadImage } from '../../store/user';


const ImageUpload = ({ songId, setShowModal }) => {
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
    <div className='form__cont modal__form'>
      <form className='form' onSubmit={submitHandler}>
        <div className='form__input__cont modal__form__input__cont'>Cover Image:
        <input
            type="file"
            className='form__input doc__input'
            onChange={updateImage}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        <button style={{backgroundColor: '#9F86C0'}} type="submit" onClick={(e) => { e.stopPropagation() }}>Upload</button>
      </form>
    </div>
  );
};

export default ImageUpload;
