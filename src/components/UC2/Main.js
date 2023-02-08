import React, {useState} from "react"
import classes from "./Main.module.css"
import CardA from "./card/CardA"
import PA from "./PA/PA"



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
            <div className={classes.container}>
                <CardA>
                    <PA propState={MAINSTATE} setPropState={SET_MAINSTATE} />
                </CardA>
            </div>
        </React.Fragment>
)
}


export default Main;