/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import { Link } from 'react-router-dom';
import React from 'react'

const Header = () => {
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

        <div css={
  css`  width: 100%;  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);  position: fixed;  top: 0;  display: flex;justify-content: space-between;align-items: center;padding: 5px 60px;background: white;z-index: 10; @media screen and (max-width: 400px) {
    padding: 5px 20px;
} `}>
  <h1>music.</h1>
  
  <div css={css`    display: flex;    gap: 30px;    `}>
      <Link to="/">Home</Link>
      <Link to="/add">Add</Link>
    </div>
</div>
    </div>
  )
}

export default Header