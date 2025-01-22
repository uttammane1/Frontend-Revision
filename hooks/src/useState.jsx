import React, { useState } from 'react';

const InputComponent = () => {

    const[inputValue, newChangeValue]=useState("Uttam");
    const onChange = (event) => {
        const newval=event.target.value;
        newChangeValue(newval)
    }

  return (
    <div>
        <h1>{inputValue}</h1>
      <input type="text" value={inputValue} placeholder="Type Here.... " onChange={onChange} />
    </div>
  );
};

export default InputComponent;
