import React, { useEffect, useState } from "react";
// import Button from "./Button";
import Timer from "./Timer";
import Lap from "./Lap";
import ControlButtons from "./ControlButtons";
import './StopWatch.css';

const StopWatch = function () {

    const [time, setTime] = useState(0);
    const [active, setActive] = useState(false);
    const [pause, setPause] = useState(true)
    const [lapValues, setLapValues] = useState([]);


    useEffect(() => {
        let interval = null;
      
        if (active && pause === false) {
          interval = setInterval(() => {
            setTime((time) => time + 1);
          }, 1000);
        } else {
          clearInterval(interval);
        }
        return () => {
          clearInterval(interval);
        };
      }, [active, pause]);

    function startTimer() {       
        setActive(true);
        setPause(false)
    }

    function stopTimer() {
        // setActive(false);
        setPause(prev => !prev);
    }

    function resetTimer() { 
        setActive(false);
        setLapValues([]);
        setTime(0);
        
    }

    function captureLap() {
        setLapValues([...lapValues, formatTime(time)])
    }

    function formatTime(totalSeconds) {

        let hrs = Math.floor(totalSeconds / 3600);
        hrs = String(hrs).padStart(2, 0)

        //getting the remaining seconds after hour calculation
        totalSeconds %= 3600;

        let mins = Math.floor(totalSeconds / 60);
        mins = String(mins).padStart(2, 0)

        let secs = totalSeconds % 60;
        secs = String(secs).padStart(2, 0)

        return hrs + ":" + mins + ":" + secs;
    }
    
    return (
       
        <div className="stop-watch">
            <div className="left-window">
                <Timer time={formatTime(time)} />
                <ControlButtons
                    active = {active}
                    paused={pause}
                    startTimer={startTimer}
                    stopTimer = {stopTimer}
                    resetTimer={resetTimer}
                    captureLap= {captureLap}
                 />                
            </div>
            <div className="right-window">
                <Lap laps={[...lapValues]} />
            </div>
        </div>
       
    )
}


export default StopWatch;