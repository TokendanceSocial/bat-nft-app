import { Carousel, IconButton } from '@material-tailwind/react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import MintItem, { MintItemProps } from './mintBox';
import Logo from '@/assets/images/mintLogo.png';
import style from '@/styles/Mint.module.css';

export default function NormalMint({ mints }: { mints: MintItemProps['mint'][] }) {
  return (
    <div
      id='mintContainer'
      className={`w-full flex flex-col px-6 pb-[100px] pt-[100px] lg:pt-[164px] items-center justify-center overflow-clip ${style['page1-bg']} px-4`}
    >
      <div className='flex items-center justify-center mb-6'>
        <div className='mr-8 font-normal	text-5xl text-white	'>WELCOME TO BAT CLUB</div>
        <Image src={Logo} alt='Mint Logo' />
      </div>
      <div className='w-full flex items-center justify-center'>
        <Carousel className='rounded-xl' loop>
          {mints.map((mint) => (
            <div
              key={mint.name}
              className='relative h-full w-full flex flex-col items-center py-24'
            >
              <MintItem mint={mint} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
