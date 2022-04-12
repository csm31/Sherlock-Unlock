import styled from "@emotion/styled";
import { Button } from "primereact/button";
// import { badgePosition } from "../constants";

const ButtonStyle = styled(Button)`
  min-width: 0;
  position: absolute;
`;
export const BadgeStyle = styled(ButtonStyle)`
  top: ${(props) => props.theme.badgePosition[props.label].top};
  right: ${(props) => props.theme.badgePosition[props.label].right};
`;

export const RoomStyle = styled.div`
  width: 30rem;
  & img {
    width: 100%;
  }
`;
