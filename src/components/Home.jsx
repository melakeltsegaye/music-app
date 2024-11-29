/** @jsxImportSource @emotion/react */
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Global, css } from '@emotion/react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


// Define the component
const Home = () => {
  const img = useSelector((state) => state.count.imgs); 
  
 
  const dispatch = useDispatch();

  

 useEffect(() => {
  dispatch({ type: 'FETCH_IMAGES' })
 }, [dispatch])




// Handle form input changes




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
      

{/* nav section  */}

<Header />


{/* main section  */}

<div css={  css`  width: 100%;  display: flex;align-items: center;padding: 5px 60px;margin-top: 70px; @media screen and (max-width: 400px) {
    padding: 5px 20px;
}`}>

<div css={  css`  width: 100%;  height: 500px;  position: relative;  `} >
  <div css={  css`  width: 100%;  position: relative;  height: 100%;border-radius: 20px;  `}>
  <div css={css`  position: absolute;  width: 100%;  height: 100%;  z-index: 3;  background-color: rgb(0, 0, 0, 0.6);border-radius: 20px;  `}></div>
  <img src="https://images.unsplash.com/photo-1485030056468-3820ff9e6e90?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" css={ css`width: 100%; object-fit: cover; height: 100%; border-radius: 20px;`} />

  </div>
  

<div css={css`  position: absolute;  top: 0;  z-index: 8;  width:100%;  height: 100%;  padding: 40px;  display: flex;align-items: end; justify-content: space-between; @media screen and (max-width: 900px) { padding: 10px;}`}>

<div css={css` width: 400px; height: 200px; padding: 10px;   backdrop-filter: blur(5px);   border-radius: 20px; flex-direction: column;   background-image: linear-gradient(rgb(158, 158, 158, 0.4), rgb(238, 235, 235, 0.1)); @media screen and (max-width: 900px) { background-image: none;   `}>
<h1 css={css`color: white;font-size: 3rem;  `}>music.</h1>
<p css={css` padding-top: 10px; color: rgb(212, 212, 212); font-size: 0.9rem; line-height: 20px;
  `}>Stream your favorite music and discover new hits. Start listening now!</p>
  <div css={css` width: 100%; padding-top: 30px`}>
    <Link to="/add" css={css`border-radius: 20px; font-size: 1rem;  border: none; width: 100%; padding: 10px; cursor: pointer; background: black; color: white; display: flex; justify-content: center; @media screen and (max-width: 900px) { background-image: linear-gradient(rgb(158, 158, 158, 0.4), rgb(238, 235, 235, 0.1));} backdrop-filter: blur(5px);`}>+ Add</Link>
  </div>
  </div>



  


</div>
</div>

</div>

{/* music list  */}


    <div css={ css`
  width: 100%;
  padding: 50px 60px 250px 60px;
  @media screen and (max-width: 400px) {
    padding: 50px 20px 750px 20px;
}
  `}>
<h1 css={ css`
  padding-bottom: 30px;
  `}>List</h1>

<div css={ css`
  display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    grid-gap: 20px;
    @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 50%));
}
  width: 100%;
  `}>
  {img && img.length > 0 && img.map((im) => (
    <div key={im.id} css={ css`width: 280px; height: 290px;position: relative; @media screen and (max-width: 1000px) {
    width: 100%;
}`}>
      <img src={im.url} css={ css`width: 100%; height: 100%; border-radius: 20px;box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08); object-fit: cover;`} alt="" />
  <div css={ css`position: absolute; top: 0; width:100%; background-image: linear-gradient(white, black); opacity: 0.6; border-radius: 20px; height: 100%; display: flex; padding: 10px; justify-content: end; flex-direction: column;`}>
  <p css={ css` padding: 10px 0 10px 0; color: white; font-size: 14px; opacity: 10;`}>{im.title}</p>
  <Link state={{ image: im }} to="/detail" css={css`border-radius: 20px; font-size: 1rem;  border: none; width: 30%; padding: 7px; cursor: pointer; background: black; color: white; display: flex; justify-content: center;`}>Detail</Link>
  </div>
      
    </div>
  ))}
</div>
  
</div>
      
    <Footer />  
      {/* <button onClick={() => dispatch()}>Trigger Saga</button> */}
    </div>
  );
};

// Connect the component to Redux store
export default Home;
