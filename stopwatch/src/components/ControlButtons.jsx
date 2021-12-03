import React  from "react";

const ControlButtons = ({active,paused,startTimer,stopTimer,resetTimer,captureLap}) => {

    const startButton = (
        <div style={styles.btn} onClick={startTimer}>
            Start
        </div>
    )
    const ActiveButtons = (
        <div style={styles.btnGroup}>
            <div onClick={stopTimer}>
                {paused? "Resume":"Stop"}
            </div>
            <div onClick={resetTimer}>
                Reset
            </div>
           { (active && !paused )? (<div onClick={captureLap}>
                Lap
            </div>): ""}
        </div>
    )
    return (
        <div>{active? ActiveButtons : startButton}</div>
    )
}

const styles = {
    btnGroup :{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around"
    },

    btn :{
        borderRadius:"5px",
        border:"3px solid blue",
        alignSelf:"flex-end"

    }
}

export default ControlButtons;