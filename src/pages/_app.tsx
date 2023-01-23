import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { ThemeProvider } from '@material-tailwind/react';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';

import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider avatar={CustomAvatar} theme={theme} chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </ThemeProvider>
  );
}
