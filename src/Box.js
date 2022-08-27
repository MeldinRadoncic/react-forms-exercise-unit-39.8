import React from "react";
import './Box.css'


const Box = ({id,color,width,height,handleRemove}) => {
    const removeBox = () => handleRemove(id)

    return (
        <div className="Box"
        id="box"
        data-testid="box"
        style={{
         backgroundColor:`${color}`,
        width:`${width}px`,
        height:`${height}px`
        }}
        
        >
            <button data-testid="removeBtn" id="removeBtn" className="Box-btn" onClick={removeBox} >X</button>
        </div>
    )
}



export default Box;