import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { arbitrum, base, mainnet, polygon } from 'wagmi/chains';

import { projectId } from './constants';

const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: 'Leslie telegram mini app',
  projectId,
  chains: [arbitrum, base, mainnet, polygon],
  ssr: false, // If your dApp uses server side rendering (SSR)
});

export function RainbowKitModalProvider({ children }: any) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children} </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
