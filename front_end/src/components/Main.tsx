import React from "react"
import {useAddresses} from "../hooks/"

const Main = ()=>{

    
    const {addreses} = useAddresses()
    

    return(
        <>
            <h1>Addresses with their number:</h1>
            {addreses.map((item,index)=>(
                <div key={index}>
                        <h3>{item.address}:{item.number}</h3>
                </div>
            ))}
        </>
    )

}


export default Main