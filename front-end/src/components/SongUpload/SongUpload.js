
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { uploadSong } from '../../store/songs';

// const SongUpload = ({songId}) => {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.session.user);
//   const uploadedSong = useSelector((state) => state.images.image);
//   const [song, setSong] = useState();

//   if (!user) return null;

//   const updateSong = (e) => {
//     setSong(e.target.files[0]);
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     dispatch(uploadSong(song, user.id, songId));
//   };

//   return (
//     <>
//       <form onSubmit={submitHandler}>
//         <input
//           type="file"
//           onChange={updateImage}
//         />
//         <button type="submit">Upload</button>
//       </form>
//       {uploadedImage && <img src={uploadedImage} alt="test" />}
//     </>
//   );
// };

// export default ImageUpload;
