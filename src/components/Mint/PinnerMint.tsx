import React, { useEffect } from 'react';
import MintItem, { MintItemProps } from './Item';
import { pinSpacer } from '@/utils/mint';
export default function PinnerMint({ mints }: { mints: MintItemProps['mint'][] }) {
  useEffect(() => {
    pinSpacer();
  }, []);

  return (
    <div id='pinMaster'>
      <div id='pinContainer'>
        {mints.map((mint, index) => (
          <section key={mint.name} className={`panel pin-${index}`}>
            <MintItem mint={mint} />
          </section>
        ))}
      </div>
    </div>
  );
}
