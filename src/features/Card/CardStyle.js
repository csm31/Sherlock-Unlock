import styled from "@emotion/styled";

export const CardStyle = styled.button`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  width: 11rem;
  height: 16rem;
  border: 3px solid
    ${(props) =>
      props.className === "selected"
        ? props.theme.colors.greenOpacity20
        : props.theme.cardType[props.cardType].backgroundColor};

  background-color: ${(props) =>
    props.className === "selected" ? props.theme.colors.greenOpacity20 : ""};
  border-radius: 5px;
  margin: 0.25rem;

  .p-card-header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${(props) =>
      props.theme.cardType[props.cardType].backgroundColor};
    h2 {
      font-size: 1.25rem;
    }
  }

  .p-card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 12rem;
    justify-content: space-evenly;

    div {
      margin: 0.25rem 0.5rem;
    }

    img {
      width: 10rem;
      height: 7rem;
      margin: 1rem;
    }
  }
`;
