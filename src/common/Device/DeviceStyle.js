import styled from "@emotion/styled";
import { InputNumber } from "primereact/inputnumber";
import "primereact/resources/themes/md-light-indigo/theme.css";
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { Button } from "primereact/button";

export const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid black;
  border-radius: 4px;
  width: 10rem;
  background-color: ${(props) => props.theme.colors.whiteGrey};
  margin: 0.5rem;
  & p {
    @media screen and (min-width: 320px) and (max-width: 600px) {
      font-size: 1rem;
    }
  }
  & div {
    margin: 0.5rem;
    width: fit-content;
    background-color: ${(props) => props.theme.colors.grey};
  }
`;

export const InputStyle = styled(InputNumber)`
  .p-inputtext {
    padding: 0.25rem;
    text-align: center;
    margin: 0.25rem;
  }
`;

export const ButtonStyle = styled(Button)`
  width: fit-content;
  margin: 0.5rem;
`;
