import classes from './UCdisplay.module.css'

const UCdisplay = (props) => {
    return (
        <div className={classes.container}>
            <section>State logs: </section>
            <p>Fuckknuckle: {props.state}</p>
        </div>
    )
}

export default UCdisplay;