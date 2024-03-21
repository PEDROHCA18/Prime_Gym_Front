// components/Header.js
import React from 'react';

const Header = () => {
  return (
    <div id='main'>
      <div className='pr-heading'>
        <h2>STEP UP YOUR</h2>
        <h1><span>FITNESS</span>WITH US</h1>
        <p className='details'>Construa seu corpo e condicionamento físico com toque profissional</p>
        <div className='header-btns'>
          <a href='#' className='header-btn'>Junte-se a nós</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
