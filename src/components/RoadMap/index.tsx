import Image, { StaticImageData } from 'next/image';
import React, { useCallback, useEffect } from 'react';
import roadmapLogo1 from '@/assets/images/roadmapLogo1.png';
import roadmapLogo2 from '@/assets/images/roadmapLogo2.png';
import { roadmapData } from '@/constanst/roadmap';
import { roadMap } from '@/utils/scrollMagic';

export default function RoadMap() {
  useEffect(() => {
    roadMap();
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
        <div className={`${index % 2 === 0 ? 'mt-[250px] flex gap-6' : 'flex gap-6'}`}>
          <h3 className='font-medium text-6xl max-md:hidden'>{`0${index + 1}`}</h3>
          <div>
            <div className='font-black text-lg'>{item.title}</div>
            <ul className={`mt-4 text-base leading-7 list-disc pl-4 max-md:font-sans `}>
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
        <div className='mt-4 relative'>
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
    <div
      id='roadmap'
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <div className='sections' id='js-slideContainer'>
        <section className='section'>
          <div
            className='w-full gap-8 sectionTitle mt-[-100px] flex flex-col justify-center items-center px-14 max-md:px-0'
            id={`title1`}
          >
            <Image src={roadmapLogo1} alt='roadmap logo' />
            <div>ROADMAP</div>
          </div>
        </section>
        {roadmapData.map((item, index) => (
          <section key={item.title} className='section'>
            <div
              className='w-full sectionTitle mt-[-100px] flex justify-center items-center px-14 max-md:px-0'
              id={`title${index + 2}`}
            >
              <div className='w-full p-4 px-7 shrink-0 flex flex-col'>
                {renderItem(item, index)}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
