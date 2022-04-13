import room from "../../resources/room.jpg";
import { RoomStyle } from "./RoomStyle";
import { BadgeStyle } from "./RoomStyle";

export const Room = ({ handleBadgeClick }) => {
  return (
    <RoomStyle className="room">
      <img alt="Sherlock Holmes office" src={room} />

      <BadgeStyle
        label="5"
        className="p-button-rounded p-button-sm door"
        onClick={(e) => handleBadgeClick(e)}
      />
      <BadgeStyle
        label="2"
        className="p-button-rounded p-button-sm chest"
        onClick={(e) => handleBadgeClick(e)}
      />
      <BadgeStyle
        label="9"
        className="p-button-rounded p-button-sm riddle-square"
        onClick={(e) => handleBadgeClick(e)}
      />
    </RoomStyle>
  );
};
