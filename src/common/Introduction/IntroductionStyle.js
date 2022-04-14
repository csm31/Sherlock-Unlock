import styled from "@emotion/styled";

export const IntroductionStyle = styled.div`
  display: flex;
  align-items: center;
//   max-width: 100%;
  padding-right: 1rem;
  background-color: ${(props) => props.theme.colors.whiteGrey};

  & img {
    width: 12rem;
    margin: 0 0.5rem;
    @media screen and (min-width: 320px) and (max-width: 600px) {
      width: 10rem;
    }
  }

  & div {
    display: flex;
    flex-direction: column;
  }
  & p {
    margin: 0.75rem 0.5rem;
    @media screen and (min-width: 320px) and (max-width: 600px) {
      font-size: 1rem;
    }
  }
`;
