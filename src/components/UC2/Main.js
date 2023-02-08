import React, {useState} from "react"
import classes from "./Main.module.css"



const Main = (props) => {
    const [ MAINSTATE, SET_MAINSTATE ] = useState (
        {
            PA: 0,
            WCA: 0,
            HC: 0
        }
    )

return (
        <React.Fragment>
            <div className={classes.container}></div>
        </React.Fragment>
)
}


export default Main;