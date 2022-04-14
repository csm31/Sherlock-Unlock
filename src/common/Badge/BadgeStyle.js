import { Button } from "primereact/button";
import styled from "@emotion/styled";

const ButtonStyle = styled(Button)`
  min-width: 0;
  position: absolute;
`;

export const BadgeStyle = styled(ButtonStyle)`
  top: ${(props) => props.theme.badgePosition[props.label].top};
  right: ${(props) => props.theme.badgePosition[props.label].right};

  &:disabled {
    background-color: ${props=>props.theme.colors.purpleOpacity50} !important; //force to use important to override the primereact theme
    & span {
      color: white;
    }
  }
`;
