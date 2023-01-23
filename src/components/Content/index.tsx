import React, { useEffect } from 'react';
import FAQ from '../FAQ';
import Mint from '../Mint';
import RoadMap from '../RoadMap';
import Story from '../Story';
import Team from '../Team';
export default function Content() {
  return (
    <div id='content' className='pt-[64px]'>
      <Mint />
      <Story />
      <RoadMap />
      <Team />
      <FAQ />
    </div>
  );
}
