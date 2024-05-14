'use client'
import React from 'react';
import Image from 'next/image';
import Sec1 from './form/Sec1';
import Sec2 from './form/Sec2';

const App = () => {
return(
  <main className='flex flex-row'>
      <Sec1 />
      <Sec2 />
   
    </main>
);
};
export default App;