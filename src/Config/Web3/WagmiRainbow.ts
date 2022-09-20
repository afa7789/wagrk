// Rainbowkit imports
import {
  connectorsForWallets,
  wallet,
} from '@rainbow-me/rainbowkit';

// Wagmi imports 
import { configureChains, createClient, createStorage, WagmiConfig } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

// Custom imports
import { custom_chains } from './CustomChains';

// Wagmi config for custom chains
const { provider, chains, webSocketProvider } = configureChains(
  custom_chains,
  [
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id !== custom_chains[0].id && chain.id !== custom_chains[1].id) return null
        return { http: chain.rpcUrls.default }
      },
    })
  ],
)

// Rainbowkit connectors list
const connectors = connectorsForWallets([
  {
    groupName: 'Suggested',
    wallets: [
      wallet.metaMask({ chains }),
      wallet.injected({ chains }),
      wallet.walletConnect({ chains }),
      wallet.trust({ chains }),
    ]
  },
  {
    groupName: 'Others',
    wallets: [
      wallet.coinbase({
        appName: "",
        chains
      }),
      wallet.rainbow({ chains }),
      wallet.ledger({ chains }),
      wallet.omni({ chains })
    ]
  }
])

// Wagmi client
const client = createClient({
  connectors,
  provider,
  autoConnect: true,
  storage: createStorage({ storage: window.localStorage }),
  webSocketProvider
})

export {client,chains}