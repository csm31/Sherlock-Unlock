import styled from "@emotion/styled";
import { Button } from "primereact/button";
// import { badgePosition } from "../constants";

export const RoomStyle = styled.div`
  // width: 30rem;
  position: relative;
  & img {
    margin: 0.5rem;
    width: 20rem;
    // width: 100%;
  }
`;

const ButtonStyle = styled(Button)`
  min-width: 0;
  position: absolute;
`;
export const BadgeStyle = styled(ButtonStyle)`
  top: ${(props) => props.theme.badgePosition[props.label].top};
  right: ${(props) => props.theme.badgePosition[props.label].right};
`;