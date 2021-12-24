import { useEffect, useState } from "react"
import SimpleContract from "../chain-info/contracts/SimpleContract.json"
import networkMapping from "../chain-info/deployments/map.json"
import { utils,Contract,providers } from "ethers"
import {useEthers,useContractFunction} from "@usedapp/core"

interface AddressToNumber{
    address:String,
    number:Number
}

export const useChangeNumber = ()=>{
    
    const {account} = useEthers()

    const isConnected = account !== undefined

    const provider = new providers.JsonRpcBatchProvider("https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161")
        
        const {abi} = SimpleContract
        const simpleContractAddress = networkMapping["42"]["SimpleContract"][0]
        const simpleContractInterface = new utils.Interface(abi)
        const simpleContract = new Contract(
            simpleContractAddress,
            simpleContractInterface,
        provider
        )
    
    const get = async()=>{
        
        if(isConnected){
            const number = await simpleContract.addressToNumber(account!.toString())
            setAddressNumber({address:account!.toString(),number:Number(number)})
        }
        
    }


    const [addressNumber,setAddressNumber] = useState<AddressToNumber | undefined>(undefined)
    
    const {send:setNumberSend,state:setNumberState} = useContractFunction(simpleContract,"changeYourNumber",
    {transactionName: "Set Your Number"})

    useEffect(()=>{
      get()
      // eslint-disable-next-line
    },[account])

    useEffect(()=>{
        if(setNumberState.status === "Success"){
            get()
        }
        // eslint-disable-next-line
    },[setNumberState])

    
  return {addressNumber,isConnected,setNumberSend,setNumberState}

}