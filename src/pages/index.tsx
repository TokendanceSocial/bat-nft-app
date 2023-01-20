import type { NextPage } from 'next';
export { default as getServerSideProps } from '@/utils/getServerSideProps';
import { useSession } from 'next-auth/react';
import Header from '@/components/Header';

function Page() {
  const session = useSession();
  console.log(session);
  return (
    <div>
      <Header />
      123
    </div>
  );
}

export default Page;
