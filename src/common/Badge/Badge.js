import { BadgeStyle } from "./BadgeStyle";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { revealCard } from "../../features/Card/cardSlice";

export const Badge = ({label, name}) => {
  const [disable, setDisable] = useState(false);
  const dispatch=useDispatch()

  const handleBadgeClick = (e) => {
    dispatch(revealCard(Number(e.target.textContent)));
    setDisable(!disable)
  };

  return (
    <BadgeStyle
      label={label}
      className={`p-button-rounded p-button-sm ${name}`}
      onClick={(e) => handleBadgeClick(e)}
      disabled={disable}
    />
  );
};
