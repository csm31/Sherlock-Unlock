import { useState } from "react";
import { InputStyle, DivStyle, ButtonStyle } from "./DeviceStyle";

export const Device = () => {
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();

  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <DivStyle>
        <h2>Sherlock device</h2>
        <p>Enter your code below</p>
        <div>
          <InputStyle
            value={input1}
            size="1"
            step={1}
            min={0}
            max={9}
            onValueChange={(e) => setInput1(e.target.value)}
          />
          <InputStyle
            value={input2}
            size="1"
            step={1}
            min={0}
            max={9}
            onValueChange={(e) => setInput2(e.target.value)}
          />
        </div>
        <ButtonStyle
          label="Ok"
          className="p-button-sm"
          onClick={(e) => handleClick(e)}
        />
      </DivStyle>
    </>
  );
};
