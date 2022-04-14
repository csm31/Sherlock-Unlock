import { ButtonStyle } from "../../common/Device/DeviceStyle";
import { InventoryStyle } from "./InventoryStyle";
import {
  selectRevealedCards,
  initializeGame,
  fetchCombinedCardThunk,
  patchCardThunk,
} from "./inventorySlice";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../Card/Card";
import { useEffect } from "react";
import { selectCards } from "../Card/cardSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Inventory = () => {
  const revealedCards = useSelector(selectRevealedCards);

  const selectedCards = useSelector(selectCards);

  const handleCombineClick = async (e) => {
    e.preventDefault();
    if (selectedCards.length !== 2) {
      toast.error("You must select 2 cards!");
    } else {
      const combinedId = selectedCards.reduce((a, b) => a + b);
      await dispatch(fetchCombinedCardThunk(combinedId)).unwrap();
      // remove combined cards

      // post db
      // dispatch(patchCardThunk(combinedId));
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeGame());
  }, [dispatch]);

  return (
    <InventoryStyle className="inventory">
      <h2>Inventory</h2>

      <div className="cards-container">
        {revealedCards.map((card, index) => {
          return <Card key={index} card={card} />;
        })}
      </div>
      {revealedCards.length >= 2 && (
        <>
          <p>To combine 2 cards, select them and click on the button</p>
          <ButtonStyle label="Combine" onClick={(e) => handleCombineClick(e)} />
        </>
      )}
    </InventoryStyle>
  );
};
