import { cardType } from "../constants";
import { CardStyle } from "./CardStyle";
import "primeicons/primeicons.css";

export const Card = ({ name }) => {
  const definedType = cardType[name];

  return (
    <>
      {definedType?.title &&
        definedType?.subtitle &&
        definedType?.content &&
        definedType?.image && (
          <CardStyle cardType={definedType.cardType}>
            <div className="p-card-header">
              <p className="p-card-subtitle">{`N°${definedType.subtitle}`}</p>
              <h2 className="p-card-title">{definedType.title}</h2>
            </div>
            <div className="p-card-content">
              <div>{definedType.content}</div>
              <img
                alt="Card"
                src={require(`../../resources/${definedType.image}`)                }
                // TODO implement a check for the path. If the image doesn't exist display a placeholder.
              />
            </div>
          </CardStyle>
        )}
    </>
  );
};
