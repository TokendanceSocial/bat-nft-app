import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Avatar from './Avatar';
import Logo1 from '@/assets/images/teamLogo1.png';
import Logo2 from '@/assets/images/teamLogo2.png';
import twitterLogo from '@/assets/images/twitter.svg';
import { teamMembers } from '@/constanst/team';

export default function Team() {
  return (
    <div
      id='team'
      style={{
        width: '100vw',
      }}
      className='bg-[#0d1c42] text-white py-12 px-4'
    >
      <div className='box flex flex-row items-center justify-center mb-6'>
        <Image width={110} height={126} src={Logo1} alt='Mint Logo' />
        <div className=' text-center font-normal text-3xl text-white'>TEAM</div>
        <Image width={110} height={126} src={Logo2} alt='Mint Logo' />
      </div>
      <div className='flex flex-row flex-wrap'>
        {teamMembers?.map((item) => {
          return (
            <div
              key={item.name}
              className='w-[100%] lg:w-[33%] md:w-[50%] overflow-hidden p-4 flex items-center'
            >
              <div className='mr-4'>
                <Avatar address={item.address} />
              </div>
              <div className='flex flex-col'>
                <a href={item.link}>
                  <span className='mr-3'>{item.name}</span>
                  <span>
                    <Image src={twitterLogo} alt='' width={22} height={22} />
                  </span>
                </a>
                <div className='text-[12px] mt-3'>{item.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
