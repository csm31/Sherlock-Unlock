import { ButtonStyle } from "../../common/Device/DeviceStyle";
import { InventoryStyle } from "./InventoryStyle";
import {
  selectRevealedCards,
  selectAvailableCards,
  revealCard,
  hideCards,
  initializeGame,
} from "../Card/cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../Card/Card";
import { useEffect } from "react";
import { selectCards } from "../Card/cardSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Inventory = () => {
  // Select state in the store
  const revealedCards = useSelector(selectRevealedCards);
  const availableCards = useSelector(selectAvailableCards);
  const selectedCards = useSelector(selectCards);

  const dispatch = useDispatch();

  const handleCombineClick = async (e) => {
    e.preventDefault();
    if (selectedCards.length !== 2) {
      toast.error("You must select 2 cards!");
    } else {
      const combinedId = selectedCards.reduce((a, b) => a + b);
      if (availableCards.find((card) => card.id === combinedId)) {
        dispatch(revealCard(combinedId));
        dispatch(hideCards(selectedCards));
        toast.success("Right combination. Find a new card in your inventory.");
      } else {
        toast.error("Wrong combination. Try again!");
      }
    }
  };

  useEffect(() => {
    dispatch(initializeGame());
  }, [dispatch]);

  return (
    <InventoryStyle className="inventory">
      <h2>Inventory</h2>

      <div className="cards-container">
        {revealedCards.map((cardId, index) => {
          return (
            <Card
              key={index}
              card={availableCards.find((card) => card.id === cardId)}
            />
          );
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
