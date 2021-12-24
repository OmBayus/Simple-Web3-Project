import { useEffect, useState } from "react"
import SimpleContract from "../chain-info/contracts/SimpleContract.json"
import networkMapping from "../chain-info/deployments/map.json"
import { utils,Contract,providers } from "ethers"

interface AddressToNumber{
  address:String,
  number:Number
}

export const useAddresses = ()=>{

  const get = async()=>{
    
    const provider = new providers.JsonRpcBatchProvider("https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161")
    
    const {abi} = SimpleContract
    const simpleContractAddress = networkMapping["42"]["SimpleContract"][0]
    const simpleContractInterface = new utils.Interface(abi)
    const simpleContract = new Contract(
        simpleContractAddress,
        simpleContractInterface,
      provider
      )
      
      const len = await simpleContract.getaAdressesLen()
      setAddresses([])
      
      for (let i = 0; i < Number(len); i++) {
        const address = await simpleContract.addresses(i)
        const number = await simpleContract.addressToNumber(address.toString())
        
        setAddresses(prevValue=>{
          if(prevValue.filter(e=>e.address === address).length === 0)
            return [...prevValue,{address,number:Number(number)}]
          return prevValue
        })
        
      }
      
    }

    const [addreses,setAddresses] = useState<AddressToNumber[]>([{address:"...",number:0},{address:"...",number:0},{address:"...",number:0},{address:"...",number:0}])
    
    useEffect(()=>{
      get()
    },[])
    
  return {addreses}

}