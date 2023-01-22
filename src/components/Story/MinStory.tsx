import Image from 'next/image';
import React from 'react';
import storyImg from '@/assets/images/story.png';
import Logo from '@/assets/images/storyLogo.png';
import { storyContent } from '@/constanst/story';

export default function MinStory() {
  return (
    <div className='w-full flex flex-col items-center justify-center py-10'>
      <div className='flex flex-row items-center justify-center mb-6'>
        <div className=' mr-8 font-normal text-3xl text-white'>ABOUT BAT</div>
        <Image width={110} height={126} src={Logo} alt='Mint Logo' />
      </div>
      <div>
        <Image alt='Story Img' src={storyImg} />
      </div>
      <div className='flex-1 flex flex-col mt-8 text-white text-sm'>
        {storyContent.map((item, index) => (
          <div key={index} className='mt-4'>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
