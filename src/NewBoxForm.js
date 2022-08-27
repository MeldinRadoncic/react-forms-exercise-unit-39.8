import React, {useState} from "react";
import {v4 as uuid} from 'uuid'



const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
color:'',
width:'',
height:''
    }
const [formData,setFormData] = useState(INITIAL_STATE)

const handleSubmit = (e) => {
    e.preventDefault();
    const {color,width,height} = formData;
    if(color !== '' && width !=='' && height !== '') {
        addBox({...formData, id:uuid()})
        setFormData({color:'',width:'',height:''})
    }else {
    alert('Inputs cannot be empty!')
    }
    
}

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }))}


return (
    <div>
        <form onSubmit={handleSubmit} >
            <label htmlFor='color'>Color</label>
            <input 
            type='text'
            placeholder="Enter a color..."
            name="color"
            id="color"
            value={formData.color}
            onChange={handleChange}
            />

<label htmlFor='width'>Width</label>
            <input 
            type='text'
            placeholder="Enter a width..."
            name="width"
            id="width"
            value={formData.width}
            onChange={handleChange}
            />

<label htmlFor='height'>Height</label>
            <input 
            type='text'
            placeholder="Enter a height..."
            name="height"
            id="height"
            value={formData.height}
            onChange={handleChange}
            />

            <button>Add Box</button>

        </form>
    </div>
)

}



export default NewBoxForm;