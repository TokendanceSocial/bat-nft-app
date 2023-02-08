import { identicon } from 'minidenticons';
import Image from 'next/image';
import React from 'react';
import { useEnsAvatar } from 'wagmi';

export default function Avatar({ address }: { address: string }) {
  const { data, isError, isLoading } = useEnsAvatar({
    address: address as `0x${string}`,
  });
  if (!data || isLoading || isError)
    return (
      <div className='w-[100px] h-[100px] rounded-md overflow-hidden'>
        <div
          style={{ background: 'transparent', width: 100, height: 100 }}
          dangerouslySetInnerHTML={{
            __html: identicon(address),
          }}
        />
      </div>
    );
  return (
    <div className='w-[100px] h-[100px] rounded-md overflow-hidden'>
      <Image alt='' src={data} width={100} height={100} />
    </div>
  );
}
