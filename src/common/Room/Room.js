import room from "../../resources/images/room.jpg";
import { RoomStyle } from "./RoomStyle";
import { Badge } from "../Badge/Badge";

export const Room = () => {
  return (
    <RoomStyle className="room">
      <img alt="Sherlock Holmes office" src={room} />
      <Badge id="5" name="door" />
      <Badge id="2" name="chest" />
      <Badge id="9" name="key" />
    </RoomStyle>
  );
};
