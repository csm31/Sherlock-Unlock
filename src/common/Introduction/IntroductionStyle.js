import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";

export const IntroductionStyle = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1rem;
  background-color: ${(props) => props.theme.colors.whiteGrey};
  
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }

  img {
    width: 12rem;
    margin: 0.5rem;
    @media screen and (max-width: 600px) {
      width: 10rem;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    margin: 0.75rem;
  }

  p {
    margin: 0.75rem 0.5rem;
    @media screen and (max-width: 600px) {
      font-size: 1rem;
    }
  }
`;

export const LinkStyle = styled(Link)`
  text-align: center;
`;

export const ButtonStyle = styled(Button)`
  width: fit-content;
  margin: 0.5rem;
`;
