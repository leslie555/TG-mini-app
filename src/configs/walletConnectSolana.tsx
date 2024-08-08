import { solana, solanaDevnet, solanaTestnet } from '@web3modal/solana/chains';
import { createWeb3Modal, defaultSolanaConfig } from '@web3modal/solana/react';

import { projectId } from './constants';

export const createSolanaWalletConnectModal = () => {
  // 0. Setup chains
  const chains = [solana, solanaTestnet, solanaDevnet];

  // 2. Create solanaConfig
  const metadata = {
    name: 'Leslie telegram mini app',
    description: 'AppKit Solana Example',
    url: 'https://web3modal.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
  };

  const solanaConfig = defaultSolanaConfig({
    metadata,
    chains,
    projectId,
  });

  // 3. Create modal
  createWeb3Modal({
    solanaConfig,
    chains,
    projectId,
  });
};
