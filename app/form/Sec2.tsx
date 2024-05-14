import React from 'react';
import Image from 'next/image';

const Sec2: React.FC=()=>{
    return(
        <div className='bg-white w-[100%]  pl-[4%] py-[11%]'>
          <div className=' flex flex-col '>
          
              
            
              <div className=''>
      
          <p className='font-bold'>Your Personal Information</p>
              </div>
              <div className='pt-2'>
              <p className=''>Lorem epsum</p>
              </div>
              <div className='py-[20%] flex flex-row items-center'>
                <h1 className='text-9xl'>Form</h1>
             </div>
             <div className='flex flex-row space-x-10'>
             <button className='items-start text-md'>Back</button>
             <button className='w-20 h-10 bg-green-900 hover:bg-green-950 rounded-md text-md text-white'>Next</button>
             </div>
          </div>
          
          
        </div>
      );
};
export default Sec2;