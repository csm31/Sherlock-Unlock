import { CardStyle, InputStyle, ButtonStyle, DialogStyle } from "./CardStyle";
import { selectCard, deselectCard, selectCards } from "./cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";

export const Card = ({ card }) => {
  const dispatch = useDispatch();
  const selectedCards = useSelector(selectCards);

  const [inputValue, setInputValue] = useState();
  const [displayModal, setDisplayModal] = useState(false);

  const isSelected =
    selectedCards.length !== 0 &&
    selectedCards.find((number) => number === card.id);

  const onHide = () => {
    setDisplayModal(false);
  };

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
      {/* Define a modal */}
      <DialogStyle
        visible={displayModal}
        style={{ width: "50vw" }}
        onHide={() => onHide()}
      >
        <img
          src={require(`../../resources/${card.image}`)}
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
              e.preventDefault();
              if (inputValue === card.code) {
                toast.success("Congratulation! You escaped from the room.");
                setDisplayModal(false);
              } else {
                toast.error("Wrong combination. Try again!");
              }
            }}
          />
        </div>
      </DialogStyle>

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
                src={require(`../../resources/${card.image}`)}
                // TODO implement a check for the path. If the image doesn't exist display a placeholder.
              />
            </div>
          </CardStyle>
        )}
    </>
  );
};
