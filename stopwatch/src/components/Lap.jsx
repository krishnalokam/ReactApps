import React from "react";

const Lap = ({laps}) => {

return(<div>
    <h1>Laps</h1>
    <div sytle={{height:"300px"}}> 
    <ol style={styles.lapStyle} >
    
    {
        laps.map((lap,idx) => {
        return <li key={idx}>{lap}</li>
    })}
    </ol>
    </div>
    </div>);

}

const styles = {
    lapStyle:{
        // listStyle:"none"
        overflow: "scroll",
        height:"300px"
    }
}
export default Lap;