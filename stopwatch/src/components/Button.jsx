import React from "react";

const Button = ({name,handleClicked}) => {
    return(
        <div>
            <button style={styles.buttonStyle} type="button" onClick={handleClicked}>{name}</button>
        </div>
    )
    
}

const styles = {
    buttonStyle:{
        width:"25%",
        margin:"10px auto",
        padding:"8px",
        border: "1px solid black",
        // background:"#ccc",
        background:"powderblue",
        borderRadius:"5px",
        color:"red",
        fontSize:"2rem"
    }
}
export default Button;