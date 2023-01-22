import Image from 'next/image';
import React from 'react';
import Logo1 from '@/assets/images/teamLogo1.png';
import Logo2 from '@/assets/images/teamLogo2.png';

export default function Team() {
  return (
    <div
      id='team'
      style={{
        width: '100vw',
        height: '100vh',
      }}
      className='bg-[#0d1c42] text-white p-4'
    >
      <div className='box flex flex-row items-center justify-center mb-6'>
        <Image width={110} height={126} src={Logo1} alt='Mint Logo' />
        <div className=' text-center font-normal text-3xl text-white'>TEAM</div>
        <Image width={110} height={126} src={Logo2} alt='Mint Logo' />
      </div>
    </div>
  );
}
