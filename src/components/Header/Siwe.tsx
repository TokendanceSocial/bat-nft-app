import { getCsrfToken, signIn, signOut, useSession } from 'next-auth/react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { SiweMessage } from 'siwe';
import { useAccount, useNetwork, useSignMessage } from 'wagmi';
import CustomConnectBtn from '../CustomConnectBtn';

function Siwe() {
  const { signMessageAsync } = useSignMessage();
  const { chain } = useNetwork();
  const [clickConnect, setClickConnect] = useState(false);
  const { address, isConnected } = useAccount();

  const { data: session, status } = useSession();

  const [nonce, setNonce] = useState<string>();
  const getNonce = useCallback(async () => {
    try {
      const nonce = await getCsrfToken();
      setNonce(nonce);
    } catch (error) {}
  }, []);
  // Pre-fetch nonce when screen is rendered
  // to ensure deep linking works for WalletConnect
  // users on iOS when signing the SIWE message
  const onceRef = useRef(false);
  useEffect(() => {
    if (onceRef.current) return;
    onceRef.current = true;
    getNonce();
  }, [getNonce]);

  const [text, setText] = useState('');
  const handleLogin = async () => {
    try {
      setText('signing-1');
      const message = new SiweMessage({
        domain: window.location.host,
        address: address,
        statement: 'Sign in with Ethereum to the app.',
        uri: window.location.origin,
        version: '1',
        chainId: chain?.id,
        nonce,
      });
      setText('signing-2');
      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      });
      setText('verifying');
      const response = await signIn('credentials', {
        message: JSON.stringify(message),
        redirect: false,
        signature,
      });
      if (!response?.ok) {
        throw new Error('Error verifying signature, please retry!');
      }
    } catch (error) {
      window.alert(error);
    }
  };

  const connected = useMemo(() => {
    return isConnected && clickConnect;
  }, [clickConnect, isConnected]);

  const ref = useRef<any>();
  useEffect(() => {
    if (connected && !session && nonce) {
      setTimeout(() => {
        ref.current.click();
      }, 2000);
    }
    if (!isConnected && session) {
      signOut({
        redirect: false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connected, session, isConnected, nonce]);

  return (
    <>
      <button ref={ref} onClick={handleLogin}>
        {text}
      </button>

      <CustomConnectBtn authenticationStatus={status} onConnect={() => setClickConnect(true)} />
    </>
  );
}

export default Siwe;
