import React from "react"
import {useEthers} from "@usedapp/core"
import {Button, Grid} from "@mui/material"
import { makeStyles } from "@mui/styles"
import {useNavigate} from "react-router-dom"


const useStyles = makeStyles(({
    container:{
        padding:4,
        display:"flex",
        justifyContent:"flex-end",
        gap:1

    },
    mainPage:{
        padding:4,
        gap:1
    }
}))

const Header = ()=>{

    const classes = useStyles()

    const navigate = useNavigate()

    const {account,activateBrowserWallet,deactivate} = useEthers()

    const isConnected = account !== undefined


    return(
    <Grid container spacing={2}>
        <Grid item xs={4} >
            <div className={classes.mainPage} >
                <Button variant="contained" onClick={()=>navigate("/")}>Main Page</Button>
            </div>
        </Grid>
        <Grid item xs={8}>
            <div className={classes.container}>
                <div>
                    {isConnected && <Button variant="contained" onClick={()=>navigate("/setnumber")}>Set your Number</Button>}
                    {isConnected ? 
                    <Button variant="contained" color="warning" onClick={deactivate}>{account}</Button> :
                    <Button variant="contained" onClick={()=>activateBrowserWallet()}>Connect</Button>  }
                </div>
            </div>
        </Grid>
    </Grid>
    )

}


export default Header