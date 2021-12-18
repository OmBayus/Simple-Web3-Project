import React from "react"
import {useAddresses} from "../hooks/"

const Main = ()=>{

    
    const {addreses} = useAddresses()
    

    return(
        <>
            {addreses.map((item,index)=>(<div key={index}>
                    <span>{item.address}</span>:<span>{item.number}</span>
                </div>))}
        </>
    )

}


export default Main