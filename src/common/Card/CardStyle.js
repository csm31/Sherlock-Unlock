import styled from "@emotion/styled";

export const CardStyle = styled.button`
  width: 10rem;
  border: 3px solid ${(props) => props.theme.cardType[props.cardType].backgroundColor};
  border-radius: 4px;
  &:focus {
    border-color: green;
    border-width: 4px;
  }
  & .p-card-header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${(props) => props.theme.cardType[props.cardType].backgroundColor};
  }

  & .p-card-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    & div {
      margin: 0.25rem 0.5rem;
    }

    & img {
      width: 7rem;
      height: 7rem;
      margin-bottom: 1rem;
    }
  }
`;
