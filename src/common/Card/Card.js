import { cardType } from "../constants";
import { CardStyle } from "./CardStyle";
import "primeicons/primeicons.css";

export const CardGame = ({ name }) => {
  const definedType = cardType[name];

  return (
    <>
      {definedType && definedType.title && definedType.subtitle && (
        <CardStyle cardType={definedType.cardType}>
          <div className="p-card-header">
            <p className="p-card-subtitle">{`N°${definedType.subtitle}`}</p>
            <h2 className="p-card-title">{definedType.title}</h2>
          </div>
          <div className="p-card-content">
            <div>{definedType.content}</div>
            <img
              alt="Card"
              src={
                definedType.image
                  ? require(`../../resources/${definedType.image}`)
                  : "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
              }
            />
          </div>
        </CardStyle>
      )}
    </>
  );
};
