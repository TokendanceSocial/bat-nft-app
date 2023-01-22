export { default as getServerSideProps } from '@/utils/getServerSideProps';
import Content from '@/components/Content';
import Header from '@/components/Header';

function Page() {
  return (
    <div className='select-none bg-black'>
      <Header />
      <Content />
      <div className='h-[80px] w-full flex items-center justify-center text-white'>
        BATNFT Official
      </div>
    </div>
  );
}

export default Page;
