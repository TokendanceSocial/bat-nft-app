import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Siwe from './Siwe';
import Logo from '@/assets/images/batLogo.png';
import { links, pages } from '@/constanst/header';
import style from '@/styles/Header.module.css';

export default function Header() {
  return (
    <header className='bg-black text-white w-full flex flex-col items-center fixed top-0 z-30'>
      <div
        className={`w-[91.66666667%] min-w-[1760px] ${style['voc-contentBox']} rounded-b-3xl max-2xl:rounded-none max-2xl:border-x-0`}
      >
        <div className='max-w-[75%] w-screen h-16 flex items-center justify-between select-none px-4 md:px-10'>
          <div className='flex justify-center items-center space-x-4'>
            <div className='cursor-pointer mr-6 w-[166px] h-[64px]'>
              <Image width={166} height={64} alt='BAT NFT Logo' src={Logo} />
            </div>
            <div className='hidden lg:block flex justify-center items-center space-x-4'>
              {pages.map((page) => (
                <Link className='mx-3' key={page.title} href={page.href}>
                  {page.title}
                </Link>
              ))}
            </div>
          </div>

          <div className='font-sans flex justify-center items-center space-x-4 ml-4'>
            <div className='hidden md:flex mr-4'>
              {links.map((link) => (
                <a
                  key={link.href}
                  className='mx-3'
                  href={link.href}
                  target='_blank'
                  rel='noreferrer'
                >
                  <Image alt='Link Logo' src={link.icon} />
                </a>
              ))}
            </div>

            <Siwe />
          </div>
        </div>
      </div>
    </header>
  );
}
