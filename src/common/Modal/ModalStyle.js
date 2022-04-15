import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import styled from "@emotion/styled";
import { InputNumber } from "primereact/inputnumber";
import "primereact/resources/themes/md-light-indigo/theme.css";
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

export const DialogStyle = styled(Dialog)`
  & img {
    width: 60%;
    margin-bottom: 1rem;
  }
  & .p-dialog-content {
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;

    & p {
      margin-left: 0;
    }

    & div {
      display: flex;
    }
  }

  & .p-dialog, .p-dialog-header {
    padding: 0;
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