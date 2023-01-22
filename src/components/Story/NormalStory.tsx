import Image from 'next/image';
import React, { useEffect } from 'react';
import storyImg from '@/assets/images/story.png';
import Logo from '@/assets/images/storyLogo.png';
import { storyContent } from '@/constanst/story';
import { story } from '@/utils/scrollMagic';

export default function NormalStory() {
  useEffect(() => {
    story('stage', '.box');
  }, []);

  return (
    <div
      id='stage'
      style={{ height: '100vh' }}
      className=' w-full flex items-center justify-center py-10'
    >
      <div className='box flex-1 mr-8 flex justify-end'>
        <Image alt='Story Img' src={storyImg} />
      </div>
      <div className='box flex-1 flex flex-col mt-8'>
        <div className='flex items-center justify-center mb-6'>
          <div className='mr-8 font-normal text-5xl text-white	'>ABOUT BAT</div>
          <Image width={110} height={126} src={Logo} alt='Mint Logo' />
        </div>

        <div className='text-white text-sm'>
          {storyContent.map((item, index) => (
            <div key={index} className='mb-4'>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
