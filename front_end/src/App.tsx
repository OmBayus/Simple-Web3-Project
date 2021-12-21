import React from "react"
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Router from "./routes";
import { ChainId, DAppProvider, Config } from '@usedapp/core'

const config: Config = {
  readOnlyChainId: ChainId.Kovan,
  networks:[
    {
      chainId: ChainId.Kovan,
      chainName: "Kovan",
      isTestChain: true,
      isLocalChain: false,
      multicallAddress: "https://kovan.etherscan.io",
      getExplorerAddressLink: (address: string) => "https://kovan.etherscan.io",
      getExplorerTransactionLink: (address: string) => "https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    }
  ],
  autoConnect:false,
  notifications: {
    expirationPeriod: 1000,
    checkInterval: 1000
  }
}

  
const App = ()=>{
    return(
    <DAppProvider config={config}>
      <ScrollToTop/>
      <Header/>
      <Router/>
    </DAppProvider>

    )
}

export default App