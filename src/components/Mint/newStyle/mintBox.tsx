import Image, { StaticImageData } from 'next/image';
import React, { useMemo } from 'react';
import { StageType } from '@/constanst/mint';
import style from '@/styles/Mint.module.css';
export interface MintItemProps {
  mint: {
    total: number;
    price: string;
    name: string;
    icon: StaticImageData;
    stageType: StageType;
    timeRange: number[];
    bg: string;
  };
}

export default function MintItem({ mint }: MintItemProps) {
  const btnText = useMemo(() => {
    const text = Object.values(StageType)[mint.stageType] as string;
    return text.replace('_', ' ');
  }, [mint.stageType]);

  const btn = useMemo(() => {
    if (mint.stageType !== StageType.MINT) {
      return (
        <button disabled className='rounded-full bg-[#4C7AF2] px-4 py-3 cursor-not-allowed'>
          {btnText}
        </button>
      );
    }
    return <button className={`${style['mint-btn']} rounded-full px-4 py-3`}>{btnText}</button>;
  }, [btnText, mint.stageType]);

  return (
    <div className='flex w-full text-white font-medium justify-center'>
      <div
        className={`ml-[10px] inline-block ${style['nft-shadow']} w-[300px] h-[300px] mr-[50px] flex justify-center items-center rounded-[5px]`}
        style={{ backgroundColor: mint.bg }}
      >
        <Image
          className={`${style['nft-shadow']} w-[260px] h-[260px] rounded-[5px]`}
          src={mint.icon}
          alt='Mint Image'
        />
      </div>
      <div className='inline-block w-[500px] h-[300px] flex flex-col justify-center items-center'>
        <div className='text-[25px]'>{mint.name} NFT</div>
        <div className='my-[20px] text-xs flex flex-col'>
          <div className='mb-2'>{mint.price}</div>
          <div>Minted: 0 / {mint.total}</div>
        </div>
        <div className='py-5 flex items-center justify-center'>{btn}</div>
      </div>
    </div>
  );
}
