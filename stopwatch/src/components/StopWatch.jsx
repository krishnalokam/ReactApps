import React, { useState } from "react";
import Header from "./Header";
import Button from "./Button";
import Timer from "./Timer";
import Lap from "./Lap";

const StopWatch = function() {

    const [time,setTime]     = useState(0);
    const [active,setActive] = useState(false);
    const [pause,setPause]   = useState(false)
    const [lapValues,setLapValues] = useState([]);

    function startTimer(){         
        setActive(true);
        setPause(false)
    }

    function stopTimer(){
        setActive(false);
        setPause(true);
    }

    function resetTimer(){
        setTime(0);
        setActive(false);
        setPause(true);
    }

    function captureLap() {
        console.log("Capture Lap"+[lapValues]);
        setLapValues([lapValues].push(formatTime(time)))
    }

    function formatTime(totalSeconds) {
        
        let hrs = Math.floor(totalSeconds/3600);
        hrs = String(hrs).padStart(2,0)
        
        totalSeconds %= 3600;
        
        let mins = Math.floor(totalSeconds/60);
        mins = String(mins).padStart(2,0)
        
        let secs = totalSeconds%60;
        secs = String(secs).padStart(2,0)

        return hrs+":"+mins+":"+secs;
    }

    setTimeout(() => {
        active && setTime(time+1);
    },1000);

 return (<div>
        <Header />
        <div style={styles.displayStyle}> 
            <Timer time={formatTime(time)} />
            <Lap laps={lapValues} />
            <Button name="Start" handleClicked={startTimer}/>
            <Button name="Stop" handleClicked={stopTimer}/>
            <Button name="Reset" handleClicked={resetTimer}/>
            <Button name="Lap" handleClicked={captureLap}/>
        </div> 
 </div>  )
}

const styles = {
    // displayStyle :{
    //     display:"flex",
    //     alignItems:"center"
    // }
}
export default StopWatch;