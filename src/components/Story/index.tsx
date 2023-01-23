import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useMemo } from 'react';
import storyImg from '@/assets/images/story.png';
import Logo from '@/assets/images/storyLogo.png';
import { pageMotionProps } from '@/constanst/motion';
import { storyContent } from '@/constanst/story';

export default function Story() {
  const title = useMemo(() => {
    return (
      <>
        <div className='mr-8 font-normal text-5xl text-white	'>ABOUT BAT</div>
        <Image width={80} height={100} src={Logo} alt='Mint Logo' />
      </>
    );
  }, []);
  return (
    // @ts-ignore
    <motion.div
      id='story'
      {...pageMotionProps}
      className='flex flex-col lg:flex-row py-12 lg:py-[90px] justify-center items-center px-4 bg-[#0D1C42]'
    >
      <div className='lg:hidden flex items-center justify-center mb-8'>{title}</div>
      <div className='w-[90%] h-[90%] md:w-[480px] md:h-[480px] lg:mr-8 flex justify-center'>
        <Image alt='Story Img' src={storyImg} />
      </div>
      <div className='flex-1 flex flex-col mt-8'>
        <div className='flex hidden lg:flex items-center justify-center'>{title}</div>

        <div className='text-white text-sm'>
          {storyContent.map((item, index) => (
            <div key={index} className='mb-4'>
              {item}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
