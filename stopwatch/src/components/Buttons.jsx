import React  from "react";
import "./ControlButtons.css";

const Buttons = ({active,paused,startTimer,stopTimer,resetTimer,captureLap}) => {

    const ActiveButtons = (
        <div className="btn-group">
            <div className="btn" onClick={startTimer}>
            Start
            </div>
            <div className="btn" onClick={stopTimer}>
                {paused? "Resume":"Stop"}
            </div>
            <div className="btn" onClick={resetTimer}>
                Reset
            </div>
           <div className="btn" onClick={captureLap}>
                Lap
            </div>
        </div>
    )
    return (
        <div className="buttons">{ActiveButtons}</div>
    )
}

export default Buttons;