import React from "react"
import {useEthers} from "@usedapp/core"
import {Button} from "@mui/material"
import { makeStyles } from "@mui/styles"


const useStyles = makeStyles(({
    container:{
        padding:4,
        display:"flex",
        justifyContent:"flex-end",
        gap:1

    }
}))

const Header = ()=>{

    const classes = useStyles()

    const {account,activateBrowserWallet,deactivate} = useEthers()

    
    const isConnected = account !== undefined


    return(
    <div className={classes.container}>
        <div>
            {isConnected ? 
            <Button variant="contained" color="warning" onClick={deactivate}>{account}</Button> :
            <Button variant="contained" onClick={()=>activateBrowserWallet()}>Connect</Button>  }
        </div>
    </div>
    )

}


export default Header