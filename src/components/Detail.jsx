/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from 'react'
import Header from './Header';
import Footer from './Footer';

const Detail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const image = location.state?.image;
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this Music?")) {
      console.log("Dispatching DELETE_IMAGE action with payload:", id);
      dispatch({ type: "DELETE_IMAGE", payload: id });
    }
    navigate("/");
  };

  const handleEdit = () => {
    navigate('/add', { state: { image } }); // Pass image data to the Edit form
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

      <div css={css`padding: 10px 60px 250px 60px; margin-top: 70px; @media screen and (max-width: 1000px) {
    padding: 10px 20px 750px 20px;
}`}>
        <h1 css={css`padding: 0 0 30px 0;`}>Detail</h1>
        <div css={css`width: 100%; padding: 20px; background: rgba(228, 228, 228); height: 500px;  border-radius: 20px; display: flex; gap: 40px; @media screen and (max-width: 1000px) {
   background: none;
   height: 700px;
   padding: 0;
}`}>
        {image ? (
          <div css={css`@media screen and (max-width: 1000px) {
            display: flex;
   flex-direction: column; width: 100%
}`}>
          <img css={css`height: 100%; width: 500px; border-radius: 20px; object-fit: cover; @media screen and (max-width: 1000px) {
   width: 100%;
}`} src={image.url} alt="" />
          <div css={css`color:rgb(98, 98, 98); line-height: 25px; width:50%; @media screen and (max-width: 1000px) { width:100%; padding-top: 20px;}`}>
            <h2>{image.title}</h2>
            <p css={css`padding-top: 15px;`}>{image.id}</p>
            <p css={css`padding-top: 15px;`}>Music is the poetry of the soul, weaving emotions into melodies and turning moments into timeless memories. It speaks what words cannot, painting the silence with the colors of the heart</p>
            <div css={css`display: flex; gap: 20px; padding-top: 30px;`}>
              <button onClick={handleEdit} css={css`width: 150px; background: white;  border: black solid 1px; padding: 15px; border-radius: 30px; cursor: pointer;`}>Edit</button>
              <button onClick={() => handleDelete(image.id)} css={css`width: 150px; background: black; color: white; border: none; padding: 15px; border-radius: 30px; cursor: pointer;`}>Delete</button>
            </div>
          </div>
          </div>
         ) : (
          <p>Image not found.</p>
        )}
        </div>
      </div>

      <Footer />
      </div>
  )
}

export default Detail