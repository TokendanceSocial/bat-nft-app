import Image, { StaticImageData } from 'next/image';
import React, { useMemo } from 'react';
import { StageType } from '@/constanst/mint';
export interface MintItemProps {
  mint: {
    total: number;
    price: string;
    name: string;
    icon: StaticImageData;
    stageType: StageType;
    timeRange: number[];
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
    return <button className='rounded-full bg-[#1043C5] px-4 py-3'>{btnText}</button>;
  }, [btnText, mint.stageType]);
  return (
    <div className='text-white flex flex-col items-center justify-center'>
      <div className='my-4'>{mint.name}</div>
      <div className='relative'>
        <Image width={300} height={400} className='rounded-xl' src={mint.icon} alt='Mint Image' />
        <div className='absolute w-full bottom-0 left-0 py-5 flex items-center justify-center'>
          {btn}
        </div>
      </div>
      <div className='mt-4 text-xs flex flex-col'>
        <div className='mb-2'>{mint.price}</div>
        <div>Minted: 0 / {mint.total}</div>
      </div>
    </div>
  );
}
