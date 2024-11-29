/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../reducers/reducer';
import { useLocation, useNavigate } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

const Add = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();



  const [formData, setFormData] = useState({
    albumId: 1,
    id: '',
    title: '',
    url: '',
    thumbnailUrl: ''
  });

  const allImages = useSelector((state) => state.count.imgs);

  useEffect(() => {
    if (location.state?.image) {
      setFormData(location.state.image); // Pre-populate for editing
    } else {
      // For new entries, calculate the next ID (check if allImages exists)
      const nextId = allImages?.length > 0 ? Math.max(...allImages.map((image) => image.id)) + 1 : 1;
      setFormData((prevData) => ({ ...prevData, id: nextId }));
    }
  }, [location.state, allImages]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);

    if (location.state?.image) {
      // Dispatch UPDATE_IMAGE for editing
      dispatch({ type: 'UPDATE_IMAGE', payload: formData });
    } else {
      // Dispatch ADD_POST for new entries
      dispatch({ type: 'ADD_POST', payload: formData });
    }
    // Dispatch to Redux
    dispatch(addPost([formData]));

    // Clear form
    setFormData({
      albumId: '',
      id: '',
      title: '',
      url: '',
      thumbnailUrl: ''
    });
    navigate("/");
  };

  

  return (
    <div>
         <Global
      styles={css`
        * {
          margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Gill Sans, sans-serif;
  text-decoration: none;

        }
  a {
  color: black;
  }
      `}
    />

   <Header /> 
        
   <div css={css`padding: 10px 60px 250px 60px;margin-top: 70px; display: flex; justify-content: center; flex-direction: column; @media screen and (max-width: 900px) {
    padding: 10px 20px 750px 20px;
}`}>
   <h1 css={css`padding: 0 0 30px 0;`}>Add</h1>
   <div css={css`width:100%; display: flex; justify-content: center;`}>
    <div css={css `width: 40%; background: rgba(228, 228, 228); padding: 30px; border-radius: 20px; @media screen and (max-width: 900px) {
    width: 100%;
}`}>
    <form onSubmit={handleSubmit}>
              {/* Album ID */}
              <div css={css`margin-bottom: 20px;`}>
                <label
                  htmlFor="albumId"
                  css={css`display: block; margin-bottom: 8px; font-weight: bold;`}
                >
                  Album ID
                </label>
                <input
                  type="number"
                  id="albumId"
                  name="albumId"
                  value={formData.albumId}
                  onChange={handleChange}
                  placeholder="Enter Album ID"
                  required
                  readOnly
                  css={css`
                    width: 100%;
                    padding: 10px;
                    border-radius: 5px;
                    border: 1px solid #ccc;
                    outline: none;
                    font-size: 16px;
                  `}
                />
              </div>

              {/* ID */}
              <div css={css`margin-bottom: 20px;`}>
                <label
                  htmlFor="id"
                  css={css`display: block; margin-bottom: 8px; font-weight: bold;`}
                >
                  ID
                </label>
                <input
                  type="number"
                  id="id"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                  placeholder="Enter ID"
                  required
                  readOnly
                  css={css`
                    width: 100%;
                    padding: 10px;
                    border-radius: 5px;
                    border: 1px solid #ccc;
                    outline: none;
                    font-size: 16px;
                  `}
                />
              </div>

              {/* Title */}
              <div css={css`margin-bottom: 20px;`}>
                <label
                  htmlFor="title"
                  css={css`display: block; margin-bottom: 8px; font-weight: bold;`}
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter Title"
                  required
                  css={css`
                    width: 100%;
                    padding: 10px;
                    border-radius: 5px;
                    border: 1px solid #ccc;
                    outline: none;
                    font-size: 16px;
                  `}
                />
              </div>

              {/* URL */}
              <div css={css`margin-bottom: 20px;`}>
                <label
                  htmlFor="url"
                  css={css`display: block; margin-bottom: 8px; font-weight: bold;`}
                >
                  Image URL
                </label>
                <input
                  type="text"
                  id="url"
                  name="url"
                  value={formData.url}
                  onChange={handleChange}
                  placeholder="Enter Image URL"
                  required
                  css={css`
                    width: 100%;
                    padding: 10px;
                    border-radius: 5px;
                    border: 1px solid #ccc;
                    outline: none;
                    font-size: 16px;
                  `}
                />
              </div>

              {/* Thumbnail URL */}
              <div css={css`margin-bottom: 20px;`}>
                <label
                  htmlFor="thumbnailUrl"
                  css={css`display: block; margin-bottom: 8px; font-weight: bold;`}
                >
                  Thumbnail URL
                </label>
                <input
                  type="text"
                  id="thumbnailUrl"
                  name="thumbnailUrl"
                  value={formData.thumbnailUrl}
                  onChange={handleChange}
                  placeholder="Enter Thumbnail URL"
                  css={css`
                    width: 100%;
                    padding: 10px;
                    border-radius: 5px;
                    border: 1px solid #ccc;
                    outline: none;
                    font-size: 16px;
                  `}
                />
              </div>

              {/* Submit Button */}
              
              <button
                type="submit"
                css={css`
                  width: 100%;
                  padding: 10px;
                  background-color: black;
                  color: white;
                  font-size: 16px;
                  border: none;
                  border-radius: 5px;
                  cursor: pointer;
                  &:hover {
                    background-color: #333;
                  }
                `}
              >
                {location.state?.image ? 'Update' : 'Add'}
              </button>
            </form>
    </div>
   </div>
</div>
        <Footer />
        </div>
  )
}

export default Add