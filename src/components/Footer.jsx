/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import React from 'react'
import { AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai'
import { SiTiktok } from 'react-icons/si'
import { FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div css={css`position: absolute; bottom: 0; width:100%; `}>
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
        
<div css={css`width: 100%; background: rgba(228, 228, 228); padding: 20px 60px; display: flex; justify-content: space-between; @media screen and (max-width: 900px) {
    flex-direction: column-reverse; align-items: center;
}`}>
    <div css={css`display: flex; align-items: center; width: 20%; flex-direction: column;  @media screen and (max-width: 900px) {
    width: 100%;
}`}>
    <h1 css={css`color: white;font-size: 3rem; text-shadow: 0 5px 6px rgba(0, 0, 0, 0.5), 4px 4px 3px rgba(0, 0, 0, 0.5); padding: 10px 0 20px 0;`}>music.</h1>
    <div css={css`background: gray; padding: 10px 15px; width: 100%; border-radius: 40px; color: rgb(5, 13, 49); display: flex; justify-content: space-between; font-size: 1.6rem; @media screen and (max-width: 900px) {
    padding: 10px 20px;
}`}>
    <AiOutlineInstagram />
    <AiFillFacebook />
    <SiTiktok />
    <FaYoutube />
    </div>
    </div>

    <div css={css`display: flex; justify-content: space-between; width: 60%; @media screen and (max-width: 900px) {
    width: 100%; flex-direction: column; gap: 30px;
}`}>
<div css={css`line-height: 25px;`}>
    <h1 css={css`padding-bottom: 10px;`}>Product</h1>
    <p>Music</p>
    <p>Sound Effects</p>
    <p>Pricing</p>
    <p>Log in</p>
    <p>Start free trial</p>
</div>
<div css={css`line-height: 25px;`}>
    <h1 css={css`padding-bottom: 10px;`}>Product</h1>
    <p>Music</p>
    <p>Sound Effects</p>
    <p>Pricing</p>
    <p>Log in</p>
    <p>Start free trial</p>
</div>
<div css={css`line-height: 25px;`}>
    <h1 css={css`padding-bottom: 10px;`}>Product</h1>
    <p>Music</p>
    <p>Sound Effects</p>
    <p>Pricing</p>
    <p>Log in</p>
    <p>Start free trial</p>
</div>
    </div>

</div>

        </div>
  )
}

export default Footer