import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider, getDefaultWallets, ConnectButton } from '@rainbow-me/rainbowkit';
import { RainbowKitSiweNextAuthProvider } from '@rainbow-me/rainbowkit-siwe-next-auth';
import type { AppProps } from 'next/app';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { useEffect } from 'react';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, goerli } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import CustomAvatar from '@/components/CustomAvatar';
import { theme } from '@/constanst/rainbowKitTheme';

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

export default function App({ Component, pageProps }: AppProps<{ session: Session }>) {
  useEffect(() => {
    const use = async () => {
      // @ts-ignore
      (await import('tw-elements')).default;
    };
    use();
  }, []);
  return (
    <WagmiConfig client={wagmiClient}>
      <SessionProvider refetchInterval={0} session={pageProps.session}>
        <RainbowKitProvider avatar={CustomAvatar} theme={theme} chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </SessionProvider>
    </WagmiConfig>
  );
}
