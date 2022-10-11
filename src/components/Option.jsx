import { Checkbox, Label } from 'flowbite-react';
import React from 'react';

const Option = ({option}) => {
    return (
        <div className="flex items-center gap-2 border-2 p-3 rounded-lg border-teal-600 shadow-md">
        <Checkbox id={option} />
        <Label htmlFor={option}>
          {option}
        </Label>
      </div>
    );
};

export default Option;