import React, { useState } from "react";

function Input() {
  const [inputValue, setInputValue] = useState("");
  const [inputNumber, setInputNumber] = useState(0);
  const [inputs, setInputs] = useState([]);

  function addInformation() {
    const newInput = {
      name: inputValue,
      number: inputNumber,
      id: inputs.length,
    };

    setInputs([...inputs, newInput]);
    setInputValue("");
    setInputNumber(0);
  }

  function handleAdd(id) {
    const updatedInputs = inputs.map((input) =>
      input.id === id ? { ...input, number: input.number + 1 } : input
    );
    setInputs(updatedInputs);
  }

  function handleSubtract(id) {
    const updatedInputs = inputs.map((input) =>
      input.id === id ? { ...input, number: input.number - 1 } : input
    );
    setInputs(updatedInputs);
  }

  return (
    <>
      <div>
        <h1>Geekster Education Planner</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input
          type="number"
          value={inputNumber}
          onChange={(e) => setInputNumber(parseInt(e.target.value))}
        />
        <button onClick={addInformation}>ADD</button>
      </div>
      <div>
        {inputs.map((input) => (
          <div key={input.id} style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
            <p>{`Course = ${input.name} - Hours = ${input.number} ` }</p>
            <button style={{width:"30px" , height:"30px"}} onClick={() => handleAdd(input.id)}>+</button>
            <button style={{width:"30px" , height:"30px"}} onClick={() => handleSubtract(input.id)}>-</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Input;