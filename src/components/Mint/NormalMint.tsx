import Image, { StaticImageData } from 'next/image';
import React from 'react';
import MintItem, { MintItemProps } from './Item';
import Logo from '@/assets/images/mintLogo.png';

export default function NormalMint({ mints }: { mints: MintItemProps['mint'][] }) {
  return (
    <div
      id='mintContainer'
      className='w-full flex flex-col px-6 py-[100px] items-center justify-center overflow-clip bg-[#1043C5] px-4'
    >
      <div className='flex items-center justify-center mb-6'>
        <div className='mr-8 font-normal	text-5xl text-white	'>WELCOME TO BAT CLUB</div>
        <Image src={Logo} alt='Mint Logo' />
      </div>
      <div className='w-full flex items-center justify-center'>
        {mints.map((mint, index) => (
          <div key={mint.name} className='flex-1 flex flex-col items-center'>
            <MintItem mint={mint} />
          </div>
        ))}
      </div>
    </div>
  );
}
