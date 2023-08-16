import React, { useState, useEffect } from 'react';
import './style/loading.css';
import vortex from '../img/vortice.png';

const Loading = () => {

  return (
    <div className='loading'>
      <img src={vortex} alt='' />
      <p>Loading</p>
    </div>
  );
};

export default Loading;