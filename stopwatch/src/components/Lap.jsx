import React from "react";
import './Lap.css';

const Lap = ({laps}) => <div  className="lap" >
                <p className="title">Laps</p>    
                <div  className="lap-values">
                    <ol  >    
                        { laps.map((lap,idx) => { 
                            return <li key={idx}>{lap}</li> })
                        }
                    </ol>
                </div>
            </div>
    

export default Lap;