import Image, { StaticImageData } from 'next/image';
import React, { useEffect } from 'react';
import MintItem, { MintItemProps } from './Item';
import Logo from '@/assets/images/mintLogo.png';
import { mint } from '@/utils/scrollMagic';

export default function PinnerMint({ mints }: { mints: MintItemProps['mint'][] }) {
  useEffect(() => {
    mint('pinner', ['section.panel.mint2', 'section.panel.mint3']);
  }, []);

  return (
    <div id='pinner' className=''>
      <div id='mintContainer'>
        {mints.map((mint, index) => (
          <section key={mint.name} className={`bg-[#1043C5] flex flex-col panel mint${index + 1} `}>
            <div className=' flex items-center justify-center font-normal text-3xl text-white'>
              <div className='mr-6'>BAT CLUB</div>
              <Image src={Logo} alt='Mint Logo' />
            </div>
            <MintItem mint={mint} />
          </section>
        ))}
      </div>
    </div>
  );
}
