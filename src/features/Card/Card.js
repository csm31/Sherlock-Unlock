import { CardStyle } from "./CardStyle";
import { selectCard, deselectCard, selectCards } from "./cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Modal } from "../../common/Modal/Modal";

export const Card = ({ card }) => {
  const [displayModal, setDisplayModal] = useState(false);

  const selectedCards = useSelector(selectCards);
  const isSelected = selectedCards.find((number) => number === card.id);

  const dispatch = useDispatch();

  /**
   * Display the modal if the card is interactive.If not, select it.
   */
  const handleClickOnCard = () => {
    if (card.cardType === "interactive") {
      setDisplayModal(!displayModal);
    } else {
      !isSelected
        ? dispatch(selectCard({ id: card.id }))
        : dispatch(deselectCard({ id: card.id }));
    }
  };

  return (
    <>
      <Modal
        setDisplayModal={setDisplayModal}
        displayModal={displayModal}
        card={card}
      />

      {card?.title &&
        card?.id &&
        card?.content &&
        card?.image &&
        card?.cardType && (
          <CardStyle
            cardType={card.cardType}
            onClick={() => handleClickOnCard()}
            className={isSelected ? "selected" : ""}
          >
            <div className="p-card-header">
              <p className="p-card-number">{`N°${card.id}`}</p>
              <h2 className="p-card-title">{card.title}</h2>
            </div>
            <div className="p-card-content">
              <div>{card.content}</div>
              <img
                alt="Card"
                src={require(`../../resources/images/${card.image}`)}
                // TODO implement a check for the path. If the image doesn't exist display a placeholder.
              />
            </div>
          </CardStyle>
        )}
    </>
  );
};
