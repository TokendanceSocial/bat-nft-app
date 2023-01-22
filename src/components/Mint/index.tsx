import React, { useCallback, useEffect, useMemo } from 'react';
import NormalMint from './NormalMint';
import PinnerMint from './PinnerMint';
import { StageType, mintStages } from '@/constanst/mint';

export default function Mint() {
  const now = useMemo(() => Date.now(), []);
  const mintStage = useMemo(() => {
    const [start, end] = mintStages[0].timeRange;
    return now <= end ? mintStages[0] : mintStages[1];
  }, [now]);
  const mints = useMemo(() => {
    const [start, end] = mintStage.timeRange;
    let type = StageType.MINT;
    if (now < start) {
      type = StageType.COMMING_SOOM;
    } else if (now > end) {
      type = StageType.EXPIRED;
    }
    return mintStage.items.map((item) => {
      return {
        ...item,
        total: mintStage.total,
        timeRange: mintStage.timeRange,
        stageType: type,
      };
    });
  }, [mintStage, now]);

  return (
    <div id='mint'>
      <div className='lg:block max-lg:hidden'>
        <NormalMint mints={mints} />
      </div>
      <div className='lg:hidden'>
        <PinnerMint mints={mints} />
      </div>
    </div>
  );
}
