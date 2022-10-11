import {  Label, Radio } from 'flowbite-react';
import React, { useState } from 'react';



const Option = ({option,handleCorrectAnswer , question}) => {

    const [isHovering, setIsHovering] = useState(false);


    const labelStyle = {
  
        display: "flex",
        alignItem: "start",
        gap: "15px",
        border: "2px solid #48adad",
        borderRadius: "10px",
        padding: "15px",
        boxShadow: "0 0 5px #c7c6c6",
        backgroundColor: isHovering ? '#eaffff' : '',
        

    }

    // for handling hover effect on options
    const handleMouseEnter = () => {
      setIsHovering(true);
    };
    const handleMouseLeave = () => {
      setIsHovering(false);
    };


    return (
        <Label htmlFor={option} style= {labelStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <span >
        <Radio onClick={()=>handleCorrectAnswer(option)} id={option} name={question} />
        </span>
        <span className=' text-left pl-1'>
          {option}
        </span>

        </Label>
    );
};

export default Option;