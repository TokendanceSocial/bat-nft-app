import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/images/faqLogo.png';
import { faqData } from '@/constanst/faq';

export default function FAQ() {
  return (
    <div id='faq' className='bg-[#1043c5] text-white p-4 flex flex-col items-center justify-center'>
      <div className='pt-11 max-md:pt-0 flex flex-row items-center justify-center mb-6'>
        <div className=' mr-8 font-normal text-3xl text-white'>FAQ</div>
        <Image width={110} height={126} src={Logo} alt='Mint Logo' />
      </div>
      <div
        className='accordion accordion-flush pb-11  w-[70%] max-md:w-full'
        id='accordionFlushExample'
      >
        {faqData.map((item, index) => {
          return (
            <div
              key={item.question}
              className='accordion-item border-t-0 border-l-0 border-r-0 rounded-none border '
            >
              <h2 className='accordion-header mb-0' id={`heading${index}`}>
                <button
                  className='accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left border-0 rounded-none transition focus:outline-none text-white collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target={`#collapse${index}`}
                  aria-expanded='false'
                  aria-controls={`collapse${index}`}
                >
                  {item.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className='accordion-collapse border-0 collapse'
                aria-labelledby={`heading${index}`}
                data-bs-parent='#accordionFlushExample'
              >
                <div className='accordion-body my-4 py-4 px-5 text-sm'>{item.answer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
