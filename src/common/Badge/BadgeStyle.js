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
    background-color: rgba(
      63,
      81,
      181,
      0.76
    ) !important; //force to use important to override the primereact theme
    & span {
      color: white;
    }
  }
`;
