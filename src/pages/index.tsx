import Content from '@/components/Content';
import Header from '@/components/Header';
import Example from '@/components/RoadMap';

function Page() {
  return (
    <div className='select-none bg-[#0D1C42]'>
      <Header />
      <Content />
      <div className='bg-black h-[80px] w-full flex items-center justify-center text-white'>
        BATNFT Official
      </div>
    </div>
  );
}

export default Page;
