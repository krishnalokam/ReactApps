import React from "react";
import './Lap.css';

const Lap = ({laps, lapref}) => { 
    return ( <div  className="lap" >
                <p className="title">Laps</p>    
                <div  className="lap-values">
                    <ol ref =  {lapref} >    
                        { laps.map((lap,idx) =>  <li key={idx}>{lap}</li>)  }
                    </ol>
                </div>
             </div>
            )
    }

export default Lap;