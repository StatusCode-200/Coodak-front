/*eslint-disable*/

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar } from 'react-bootstrap';
// import ContentFunction from '../ToggleBackground/content-theam.js';
// import { ThemeContext } from '../../views/context/TheamContainer';

import './loading.scss';

function Loading(props) {
//   const themeContext = useContext(ThemeContext);

  return (
    <main id="loadingPage" >
   
<div class="about">
   <a class="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank">
      <span class="icon"></span>
   </a>
   <a class="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank">
      <span class="icon"></span>
   </a>
   <a class="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank">
      <span class="icon"></span>
   </a>
   <a class="bg_links logo"></a>
</div>


<div class="content">
   <div class="loading">
<p>loading</p>
      <span></span>
   </div>
</div> 
       
        {/* <ContentFunction /> */}
     

    </main>
  );
}

export default Loading;
