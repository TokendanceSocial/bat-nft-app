import React, { useMemo, useRef } from 'react';
import NormalMint from './NormalMint';
import PinnerMint from './PinnerMint';
import NewStyleMint from './newStyle';
import { StageType, mintStages, ERandomBg } from '@/constanst/mint';
import { getRandomNumber } from '@/utils';

export default function Mint() {
  const now = useMemo(() => Date.now(), []);

  const randomRef = useRef(getRandomNumber(0, 4));

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
      const config = {
        ...item,
        total: mintStage.total,
        timeRange: mintStage.timeRange,
        stageType: type,
        bg: ERandomBg[randomRef.current],
      };

      randomRef.current++;

      if (randomRef.current === 5) {
        randomRef.current = 0;
      }
      return config;
    });
  }, [mintStage, now]);

  return (
    <div id='mint' className='pt-[64px] lg:pt-0'>
      <div className='hidden lg:block'>
        {/* <NormalMint mints={mints} /> */}
        <NewStyleMint mints={mints} />
      </div>
      <div className='lg:hidden'>
        <PinnerMint mints={mints} />
      </div>
    </div>
  );
}
