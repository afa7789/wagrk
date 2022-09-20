// Rainbowkit imports
import {
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

// Wagmi imports 
import { WagmiConfig } from 'wagmi';

// Custom imports
// Containers
import { Default } from './Container/Default/Default';
// Components
import { CustomAvatar } from './Components/Web3/CustomAvatar'
// Config
import { client,chains }  from './Config/Web3/WagmiRainbow'

function App() {

  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider avatar={CustomAvatar} chains={chains} initialChain={43114}>
        <Default/>
      </RainbowKitProvider> 
    </WagmiConfig>
  );
}

export default App;
