import { verifyMessage } from 'ethers/lib/utils';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAccount, useSignMessage } from 'wagmi';
import CustomConnectBtn from '../CustomConnectBtn';

function Siwe() {
  const [authenticationStatus, setAuthenticationStatus] = useState(() => {
    if (typeof window === 'undefined') return 'unauthenticated';
    if (localStorage.getItem('authenticationStatus') === 'true') {
      return 'authenticated';
    }
    return 'unauthenticated';
  });
  const { signMessage } = useSignMessage({
    onSuccess(data, variables) {
      // Verify signature when sign message succeeds
      const address = verifyMessage(variables.message, data);
      if (!address) return;
      localStorage.setItem('authenticationStatus', 'true');
      setAuthenticationStatus('authenticated');
    },
  });
  const [clickConnect, setClickConnect] = useState(false);
  const { isConnected } = useAccount();

  const handleLogin = useCallback(async () => {
    signMessage({ message: 'Sign in the bat nft app.' });
  }, [signMessage]);

  const signOut = useCallback(() => {
    setAuthenticationStatus('unauthenticated');
    localStorage.removeItem('authenticationStatus');
  }, []);

  const connected = useMemo(() => {
    return isConnected && clickConnect;
  }, [clickConnect, isConnected]);

  useEffect(() => {
    if (!isConnected && authenticationStatus === 'authenticated') {
      signOut();
    }
  }, [isConnected, authenticationStatus, signOut]);

  /**
   * While it might be tempting to combine the "Connect Wallet" and "Sign In" steps into a single action, this causes issues with deep linking for WalletConnect on iOS. This is because the browser doesn't open the corresponding native app if the navigation wasn't immediately triggered by a user action.
   */
  useEffect(() => {
    if (connected && authenticationStatus === 'unauthenticated') {
      handleLogin();
    }
  }, [connected, authenticationStatus, handleLogin]);

  return (
    <>
      <CustomConnectBtn
        authenticationStatus={authenticationStatus}
        onConnect={() => setClickConnect(true)}
      />
    </>
  );
}

export default Siwe;
