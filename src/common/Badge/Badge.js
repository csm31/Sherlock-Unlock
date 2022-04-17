import { ButtonStyle } from "./BadgeStyle";
import { Badge as BadgeNumber } from "primereact/badge";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { revealCard } from "../../features/Card/cardSlice";

export const Badge = ({ id, name }) => {
  const [disabled, setDisabled] = useState(false);

  const dispatch = useDispatch();

  /**
   * Dispatch an action and disable the badge number
   * @param {Object} e - event object
   */
  const handleBadgeClick = (e) => {
    dispatch(revealCard(Number(e.target.textContent)));
    setDisabled(!disabled);
  };

  return (
    <ButtonStyle
      value={id}
      className={`p-button-rounded p-button-sm ${name}`}
      onClick={(e) => handleBadgeClick(e)}
      disabled={disabled}
    >
      <BadgeNumber value={id} />
    </ButtonStyle>
  );
};
