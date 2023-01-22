import React from 'react';
import MinStory from './MinStory';
import NormalStory from './NormalStory';
export default function Story() {
  return (
    <div id='story' className='px-4 bg-[#0D1C42]'>
      <div className='h-full md:block max-md:hidden'>
        <NormalStory />
      </div>
      <div className='md:hidden'>
        <MinStory />
      </div>
    </div>
  );
}
