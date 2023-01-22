import { getCsrfToken, signIn, signOut, useSession } from 'next-auth/react';
import { useEffect, useMemo, useState } from 'react';
import { SiweMessage } from 'siwe';
import { useAccount, useNetwork, useSignMessage } from 'wagmi';
import CustomConnectBtn from '../CustomConnectBtn';

function Siwe() {
  const { signMessageAsync } = useSignMessage();
  const { chain } = useNetwork();
  const [clickConnect, setClickConnect] = useState(false);
  const { address, isConnected } = useAccount();

  const { data: session, status } = useSession();

  const handleLogin = async () => {
    try {
      const message = new SiweMessage({
        domain: window.location.host,
        address: address,
        statement: 'Sign in with Ethereum to the app.',
        uri: window.location.origin,
        version: '1',
        chainId: chain?.id,
        nonce: await getCsrfToken(),
      });
      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      });
      signIn('credentials', {
        message: JSON.stringify(message),
        redirect: false,
        signature,
      });
    } catch (error) {
      window.alert(error);
    }
  };

  const connected = useMemo(() => {
    return isConnected && clickConnect;
  }, [clickConnect, isConnected]);

  useEffect(() => {
    if (connected && !session) {
      handleLogin();
    }
    if (!isConnected && session) {
      signOut({
        redirect: false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connected, session, isConnected]);

  return <CustomConnectBtn authenticationStatus={status} onConnect={() => setClickConnect(true)} />;
}

export default Siwe;
