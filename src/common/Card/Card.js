import { Card } from "primereact/card";
import { cardType } from "../constants";

export const CardGame = ({ type }) => {
  const definedType = cardType[type];
  const header = (
    <img
      alt="Card"
      src={
        definedType && definedType.image
          ? require(`../../resources/${definedType.image}`)
          : "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
      }
    />
  );
  return (
    <div>
      {definedType && definedType.title && definedType.subtitle && (
        <Card
          title={definedType.title}
          subTitle={`N°${definedType.subtitle}`}
          header={header}
        >
          <p>{definedType.content}</p>
        </Card>
      )}
    </div>
  );
};
