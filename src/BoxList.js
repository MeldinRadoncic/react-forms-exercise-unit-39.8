import React,{useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import {v4 as uuid} from 'uuid'




const BoxList = () => {

    const [boxes,setBoxes] = useState([])



    const addBox = (newBoxes) => {
        setBoxes(data => [...data,newBoxes])
        
      }

      const removeBox = (id) => {
        setBoxes(boxes => boxes.filter(
         box => box.id !== id
        ))
      }

      const newBox = boxes.map(box => (
        <Box
          key={box.id}
          id={box.id}
          width={box.width}
          height={box.height}
          color={box.color}
          handleRemove={removeBox}
        />
      ));

    return (
        <div>
            <h1>Color Box Maker</h1>
            <NewBoxForm addBox={addBox} />
           {newBox}


        </div>
    )
}

export default BoxList;