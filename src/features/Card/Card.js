import { CardStyle, InputStyle, ButtonStyle, DialogStyle } from "./CardStyle";
import "primeicons/primeicons.css";
import { selectCard, deselectCard, selectCards } from "./cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import doorCode from "../../resources/door-code.png";

export const Card = ({ card }) => {
  const dispatch = useDispatch();
  const selectedCards = useSelector(selectCards);

  const [input1, setInput1] = useState();
  const [displayBasic, setDisplayBasic] = useState(false);

  const isSelected =
    selectedCards.length !== 0 &&
    selectedCards.find((number) => number === card.id);

  const onHide = () => {
    setDisplayBasic(false);
  };

  return (
    <>
      <DialogStyle
        // showHeader={false}
        // closable={true}
        visible={displayBasic}
        style={{ width: "50vw" }}
        onHide={() => onHide()}
      >
        <img src={doorCode} alt="Zoom on the door code" />
        <p>Enter the code</p>
        <div>
          <InputStyle
            value={input1}
            // size="2"
            step={1}
            min={0}
            // max={9}
            onValueChange={(e) => setInput1(e.target.value)}
          />
          <ButtonStyle
            label="Ok"
            className=""
            // onClick={(e) => handleClick(e)}
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
            // onClick={handleSelectCard}
            onClick={() => setDisplayBasic(!displayBasic)}
            // className={isSelected ? "selected" : ""}
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
