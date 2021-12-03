import React, { useEffect, useState } from "react";
import Header from "./Header";
// import Button from "./Button";
import Timer from "./Timer";
import Lap from "./Lap";
import ControlButtons from "./ControlButtons"

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
        console.log("Start Timer");
        setActive(true);
        setPause(false)
    }

    function stopTimer() {
        console.log("stopTimer");
        // setActive(false);
        setPause(prev => !prev);
    }

    function resetTimer() { 
        console.log("resetting timer");
        setActive(false);
        setLapValues([]);
        setTime(0);
        
    }

    // useEffect(()=>{
        
    //     return () => {
    //         console.log("Active state changed to in useEffect "+active)
    //         if(active){
    //         setTime(0);
    //     }
    // }
    // },[active])
   
    // setTimeout(() => {
    //     if(active && pause===false){
    //     console.log("setTimeout");
    //     setTime(time + 1);
    //     }
    // }, 1000);

    function captureLap() {
        
        console.log("Capture Lap " + [...lapValues]);
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
    
    return (<div>
        <Header />
        <div style={styles.stopWatch}>
            <div style={styles.leftWindow}>
                <Timer time={formatTime(time)} />
                <ControlButtons
                    active = {active}
                    paused={pause}
                    startTimer={startTimer}
                    stopTimer = {stopTimer}
                    resetTimer={resetTimer}
                    captureLap= {captureLap}
                 />
                {/* <Button name="Start" handleClicked={startTimer}  />
                <Button name="Stop" handleClicked={stopTimer} />
                <Button name="Reset" handleClicked={resetTimer} />
                <Button name="Lap" handleClicked={captureLap} /> */}
            </div>
            <div style={styles.rightWindow}>
                <Lap laps={[...lapValues]} />
            </div>
        </div>
    </div>)
}

const styles = {
    stopWatch: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width:"50%",
        margin:"auto",
        height:"300px"
    },

    leftWindow: {
        flex: "2",
        alignItems:"center",
        justifyContent:"center",
        border:"1px solid black",
        height:"300px"
        // backgroundColor: "#0d0c1b",
    },
    rightWindow:{
        flex: "1",
        alignSelf:"flex-start",
        justifyContent:"flex-start",
        border:"1px solid black",
        margin:"10px"
        // backgroundColor: "#0d0c1b",
    }
}
export default StopWatch;