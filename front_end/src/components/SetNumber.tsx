import { Button, TextField,Snackbar,Alert,CircularProgress } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useChangeNumber } from "../hooks/"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(({
    multilineColor:{
        color:'white!important',
        borderBlockColor:"white",
        outlineColor:"white",
        "& $label":{
            color:"white",
            
        },
        "&::before":{
            borderColor:"white!important"
        }
    },
    
}))

export default function SetNumber(){

    const classes = useStyles()

    const {addressNumber,isConnected,setNumberSend,setNumberState} = useChangeNumber()

    const [number,setNumber] = useState("0")
    const [showSnackBar,setShowSnackBar] = useState(false)

    const handleChange = (e: { target: { value: React.SetStateAction<string> } })=>{
        if(e.target.value === "" || e.target.value === "0" || Number(e.target.value)){
            setNumber(e.target.value)
        }
        
    }

    useEffect(()=>{
        console.log(setNumberState)
        if(setNumberState.status === "Success"){
            setShowSnackBar(true)
        }
    },[setNumberState])

    const setYourNumber = ()=>{
        console.log(setNumberState)
        setNumberSend(number)
    }

    return(
    <>
        <div style={{padding:10}}>
            <h1>Your Number : {(isConnected && addressNumber!== undefined) ? addressNumber?.number:"..."}</h1>
            {isConnected &&
            <div>
                <div style={{padding:4,marginBottom:10}}>
                    <h2>Change Your Number</h2>
                    <TextField 
                    id="standard-basic" 
                    className={classes.multilineColor} 
                    InputProps={{
                        className: classes.multilineColor
                    }} 
                    onChange={handleChange} label="Your Number" variant="standard" value={number} />
                </div>
                <Button variant="contained" disabled={setNumberState.status === "Mining"} onClick={setYourNumber}>
                    {setNumberState.status === "Mining" ? <CircularProgress size={26} />:"Change!"}
                </Button>
            </div>
            }
        </div>
        <Snackbar
                open={showSnackBar}
                autoHideDuration={5000}
                onClose={()=>setShowSnackBar(false)}
            >
                <Alert onClose={()=>setShowSnackBar(false)} severity="success">Your Number Changed!</Alert>
        </Snackbar>
    </>
    )

}