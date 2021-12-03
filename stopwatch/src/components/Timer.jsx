import React  from "react";
import './Timer.css';

const Timer = ({time}) => {
    return (
        <p className="timer"> {time}</p>
    )
}
export default Timer;