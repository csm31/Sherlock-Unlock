import styled from "@emotion/styled";

export const ButtonStyle = styled.button`
  position: absolute;
  border: none;
  top: ${(props) => props.theme.badgePosition[props.value].top};
  right: ${(props) => props.theme.badgePosition[props.value].right};
  :disabled {
    cursor: not-allowed;
    span {
        background-color: ${(props) =>
          props.theme.colors
            .purpleOpacity50} !important; //force to use important to override the primereact theme
    }
`;
