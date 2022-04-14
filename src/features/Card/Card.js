import { CardStyle } from "./CardStyle";
import "primeicons/primeicons.css";
import { selectCard, deselectCard, selectCards } from "./cardSlice";
import { useDispatch, useSelector } from "react-redux";

export const Card = ({ card }) => {
  const dispatch = useDispatch();
  const selectedCards = useSelector(selectCards);

  const isSelected =
    selectedCards.lenght !== 0 &&
    selectedCards.find((number) => number === card.id);

  return (
    <>
      {card?.title && card?.id && card?.content && card?.image && (
        <CardStyle
          cardType={card.cardType}
          onClick={() =>
            !isSelected
              ? dispatch(selectCard({ id: card.id }))
              : dispatch(deselectCard({ id: card.id }))
          }
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
