// components/Navlinks.js
import React from 'react';

function Navlinks() {
  return (
    <div className='flex gap-32 justify-between text-[#999999]'>
      <a className='py-4 hover:bg-[#1f1e1e] px-8 hover:text-[#ffffff]' href='#'>
        Types
      </a>
      <a className='py-4 hover:bg-[#1f1e1e] px-8  hover:text-[#ffffff]' href='#'>
        Price
      </a>
      <a className='py-4 hover:bg-[#1f1e1e] px-8  hover:text-[#ffffff]' href='#'>
        Connect
      </a>
    </div>
  );
}

export default Navlinks;
