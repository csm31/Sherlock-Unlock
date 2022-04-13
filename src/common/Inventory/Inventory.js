import { ButtonStyle } from "../Device/DeviceStyle";
import { InventoryStyle } from "./InventoryStyle";

export const Inventory = () => {
  const handleCombineClick = (e) => {
    e.preventDefault();
  };
  return (
    <InventoryStyle className="inventory">
      <h2>Inventory</h2>
      <p>To combine 2 cards, select them and click on the button</p>
      <ButtonStyle label="Combine" onClick={(e) => handleCombineClick(e)} />
    </InventoryStyle>
  );
};
