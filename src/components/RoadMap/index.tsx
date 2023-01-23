import Image, { StaticImageData } from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { slider } from '../../utils/roadmap';
import roadmapLogo1 from '@/assets/images/roadmapLogo1.png';
import { roadmapData } from '@/constanst/roadmap';

export default function Example() {
  useEffect(() => {
    slider();
  }, []);

  const renderItem = useCallback(
    (
      item: {
        title: string;
        content: string[];
        cover: StaticImageData;
      },
      index: number,
    ) => {
      const title = (
        <div key='title' className={`${index % 2 === 0 ? 'mt-[250px] flex gap-6' : 'flex gap-6'}`}>
          <h3 className='font-medium text-6xl hidden md:block'>{`0${index + 1}`}</h3>
          <div>
            <div className='font-black text-lg'>{item.title}</div>
            <ul className={`mt-4 text-base leading-7 list-disc pl-4 `}>
              {item.content.map((li, index) => (
                <li className='wordspace-wrap' key={index}>
                  {li}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
      const cover = (
        <div key='cover' className='mt-4 relative'>
          <div className={`absolute top-5 left-${index % 2 === 0 ? '6' : '7'}`}>
            <Image width={200} height={200} alt='roadmap img' src={item.cover} />
          </div>
        </div>
      );
      if (index % 2 === 0) {
        return [cover, title];
      }
      return [title, cover];
    },
    [],
  );
  return (
    <div className='wrapper' id='roadmap'>
      <div className='sections' id='js-slideContainer'>
        <section className='section'>
          <div className='sectionTitle flex flex-col justify-center items-center px-14 max-md:px-0'>
            <Image src={roadmapLogo1} alt='roadmap logo' />
            <div>ROADMAP</div>
          </div>
        </section>
        {roadmapData.map((item, index) => (
          <div key={item.title} className='section px-4 md:px-[40px]'>
            <div className='sectionTitle'>
              <div className='w-full p-4 px-7 shrink-0 flex flex-col'>
                {renderItem(item, index)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
