import styled from "@emotion/styled";
import { InputNumber } from "primereact/inputnumber";
import "primereact/resources/themes/md-light-indigo/theme.css";
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

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

  & .p-card-header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${(props) =>
      props.theme.cardType[props.cardType].backgroundColor};
    & h2 {
      font-size: 1.25rem;
    }
  }

  & .p-card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 12rem;

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

export const DialogStyle = styled(Dialog)`

  & img {
    width: 50%;
    margin-bottom: 1rem;

  }
  & .p-dialog-content {
    display: flex;
    flex-direction: column;
    padding: 2rem;

    & p {
      margin-left: 0;
    }
    
    & div{
      display: flex;
    }
  }
`;

export const InputStyle = styled(InputNumber)`
  .p-inputtext {
    padding: 0.25rem;
    text-align: center;
    margin: 0.5rem 0.25rem;
    width: 5rem;
  }
`;

export const ButtonStyle = styled(Button)`
  width: fit-content;
  margin: 0.5rem;
`;
