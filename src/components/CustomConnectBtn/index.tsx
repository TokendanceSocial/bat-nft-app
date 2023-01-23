import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import connectLogo from '@/assets/images/connectLogo.svg';
const CustomConnectBtn = ({
  onConnect,
  authenticationStatus,
}: {
  onConnect: () => void;
  authenticationStatus: string;
}) => {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openAccountModal, openConnectModal, mounted }) => {
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated');
        return (
          <div
            className='transition duration-300 cursor-pointer px-3.5 h-9 flex justify-center items-center text-lg text-white bg-blue-900 font-bold hover:bg-blue-800 rounded-full whitespace-nowrap'
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <>
                    <Image width={22} height={22} src={connectLogo} alt='connect logo' />
                    <button
                      className='ml-2 '
                      onClick={() => {
                        openConnectModal();
                        onConnect();
                      }}
                      type='button'
                    >
                      Connect
                    </button>
                  </>
                );
              }

              return (
                <button onClick={openAccountModal} type='button'>
                  {account.displayName}
                </button>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default CustomConnectBtn;
