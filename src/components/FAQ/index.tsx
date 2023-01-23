import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import Image from 'next/image';
import { Fragment, useCallback, useState } from 'react';
import Logo from '@/assets/images/faqLogo.png';
import { faqData } from '@/constanst/faq';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  const handleOpen = useCallback((value: number) => {
    setOpen((open) => {
      return open === value ? -1 : value;
    });
  }, []);

  return (
    <div
      id='faq'
      className='w-full font-[Press Start 2P] bg-[#1043c5] text-white py-12 px-4 flex flex-col items-center justify-center'
    >
      <div className='lg:w-[80%]'>
        <div className='flex flex-row items-center justify-center mb-6'>
          <div className=' mr-8 font-normal text-3xl text-white'>FAQ</div>
          <Image width={110} height={126} src={Logo} alt='Mint Logo' />
        </div>
        {faqData.map((item, index) => (
          <Accordion key={index} open={open === index}>
            <AccordionHeader
              className='accordion-header font-[Press Start 2P] text-white hover:text-white text-left'
              onClick={() => handleOpen(index)}
            >
              <div className='w-[90%]'>{item.question}</div>
            </AccordionHeader>
            <AccordionBody className='font-[Press Start 2P] text-white bg-[#032d98] rounded-md px-8 sm:px-4 mt-4'>
              {item.answer.map((li, i) => (
                <li className='my-3' key={i}>
                  {li}
                </li>
              ))}
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
