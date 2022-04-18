import { DialogStyle, InputStyle, ButtonStyle } from "./ModalStyle";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetGame } from "../../features/Card/cardSlice";

export const Modal = ({ setDisplayModal, displayModal, card }) => {
  const [inputValue, setInputValue] = useState();

  const dispatch = useDispatch();

  let navigate = useNavigate();

  /**
   * Check if the code entered is right or not
   */
  const handleValidateCode = () => {
    if (inputValue === card.code) {
      setDisplayModal(false);
      navigate("/");
      toast.success("Congratulation! You escaped from the room.");
      // Reset store
      dispatch(resetGame());
    } else {
      toast.error("Wrong combination. Try again!");
    }
  };

  return (
    <DialogStyle
      visible={displayModal}
      style={{ width: "60vw" }}
      onHide={() => setDisplayModal(false)}
    >
      <img
        src={require(`../../resources/images/${card.image}`)}
        alt="Zoom on the card object"
      />
      <p>Enter the code</p>
      <div>
        <InputStyle
          value={inputValue}
          step={1}
          min={0}
          onValueChange={(e) => setInputValue(e.target.value)}
        />
        <ButtonStyle
          label="Ok"
          className=""
          onClick={(e) => {
            handleValidateCode(e);
          }}
        />
      </div>
    </DialogStyle>
  );
};
