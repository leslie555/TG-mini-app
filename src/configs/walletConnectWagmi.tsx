import { ConnectButton, getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { WagmiProvider } from 'wagmi';
import { arbitrum, base, mainnet, polygon } from 'wagmi/chains';

import { projectId } from './constants';

// 0. Setup queryClient
const queryClient = new QueryClient();
const queryClientRainbow = new QueryClient();

// 2. Create wagmiConfig
const metadata = {
  name: 'Leslie telegram mini app',
  description: 'AppKit Example',
  // url: 'https://web3modal.com',
  url: import.meta.env.DEV
    ? 'https://0b09-103-252-19-128.ngrok-free.app/TG-mini-app/'
    : 'https://leslie555.github.io/TG-mini-app/', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const chains = [arbitrum, base, mainnet, polygon] as const;
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  // ...wagmiOptions // Optional - Override createConfig parameters
});

// 3. Create modal
createWeb3Modal({
  metadata,
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
});

const rainbowConfig = getDefaultConfig({
  appName: 'Leslie telegram mini app',
  projectId,
  chains,
  ssr: false, // If your dApp uses server side rendering (SSR)
});

export function Web3ModalProvider({ children }: any) {
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </WagmiProvider>
      <WagmiProvider config={rainbowConfig}>
        <QueryClientProvider client={queryClientRainbow}>
          <RainbowKitProvider>
            <ConnectButton label="connect wallet(rainbowKit)" />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}
