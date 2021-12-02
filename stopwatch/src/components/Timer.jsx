import React  from "react";

const Timer = ({time}) => {
    return (
        <p style={styles.timerStyle}>{time}</p>
    )
}

const styles = {
    timerStyle:{
        // width:"25%",
        margin:"10px auto",
        padding:"8px",
        border: "1px solid black",
        // background:"#ccc",
        background:"black",
        color:"red",
        fontSize:"2rem"
    }
}
export default Timer;