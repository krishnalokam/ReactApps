import React  from "react";
import "./ControlButtons.css";

const ControlButtons = ({active,paused,startTimer,stopTimer,resetTimer,captureLap}) => {

    const startButton = (
        <div className="btn" onClick={startTimer}>
            Start
        </div>
    )
    const ActiveButtons = (
        <div className="btn-group">
            <div className="btn" onClick={stopTimer}>
                {paused? "Resume":"Stop"}
            </div>
            <div className="btn" onClick={resetTimer}>
                Reset
            </div>
           { (active && !paused )? (<div className="btn" onClick={captureLap}>
                Lap
            </div>): ""}
        </div>
    )
    return (
        <div className="buttons">{active? ActiveButtons : startButton}</div>
    )
}

export default ControlButtons;