import { useState } from "react";
import { InputStyle, DivStyle, ButtonStyle } from "./DeviceStyle";
import { selectAvailableCards } from "../../features/Card/cardSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export const Device = () => {
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();

  const doorCard = useSelector(selectAvailableCards).find((el) => el.id === 5);

  const handleClick = (e) => {
    e.preventDefault();
    const sum = input1.toString() + input2.toString();
    if (Number(sum) === doorCard.code) {
      toast.success("Congratulation! You escaped from the room.");
    } else {
      toast.error("Wrong combination. Try again!");
    }
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
