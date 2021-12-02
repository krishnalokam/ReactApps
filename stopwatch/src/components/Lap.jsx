import React from "react";

const Lap = ({laps}) => {
{console.log(laps);}
return(<div>
    <ul>
    <li>One</li>
    {/* {
        laps.map((lap,idx) => {
        return <li key={idx}>{lap}</li>
    })} */}
    </ul>
    </div>);

}

export default Lap;