import room from "../../resources/room.jpg";
import { RoomStyle } from "./RoomStyle";
import { Badge } from "../Badge/Badge";

export const Room = () => {

  return (
    <RoomStyle className="room">
      <img alt="Sherlock Holmes office" src={room} />
      <Badge label="5" name="door" />
      <Badge label="2" name="chest" />
      <Badge label="9" name="riddle-square" />
    </RoomStyle>
  );
};
