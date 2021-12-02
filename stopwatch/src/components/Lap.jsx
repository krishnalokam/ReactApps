import React from "react";

const Lap = ({laps}) => {
// {console.log("laps " +laps);}
return(<div>
    <h1>Laps</h1>
    <ol style={styles.lapStyle} >
    
    {
        laps.map((lap,idx) => {
        return <li key={idx}>{lap}</li>
    })}
    </ol>
    </div>);

}

const styles = {
    lapStyle:{
        // listStyle:"none"
    }
}
export default Lap;