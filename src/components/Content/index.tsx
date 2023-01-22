import React, { useEffect } from 'react';
import FAQ from '../FAQ';
import Mint from '../Mint';
import RoadMap from '../RoadMap';
import Story from '../Story';
import Team from '../Team';
import style from '@/styles/Main.module.css';

export default function Content() {
  return (
    <div className={style['voc-app']}>
      <Mint />
      <Story />
      <RoadMap />
      <Team />
      <FAQ />
    </div>
  );
}
