import React from "react"
import { makeStyles } from "@mui/styles"


const useStyles = makeStyles(({
    container:{
        padding:4,
        position:"fixed",
        bottom:"0",
        textAlign:"center",
        width:"100%"

    },
    link:{
        color:"white!important"
    }
}))

export default function Footer(){
    const classes = useStyles()
    return(
        <div className={classes.container}>
            {/* eslint-disable-next-line */}
            <p>OmBayus © 2021 | This website was designed by <a className={classes.link} href="https://github.com/OmBayus" target="_blank">OmBayus</a> .</p>
        </div>
    )
}