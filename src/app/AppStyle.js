import styled from "@emotion/styled";

export const HeaderStyle = styled.header`
  text-align: center;
`;
export const MainStyle = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-gap: 2rem;
  align-items: center;
  // justify-items: center;

  & .introduction {
    grid-column: 1 / 3;
  }

  & .room-device {
    display: flex;
    align-items: center;
    grid-column: 1 / 3;
  }

  & .inventory {
    grid-column: 1 / 3;
  }

  @media screen and (min-width: 320px) and (max-width: 600px) {
    grid-template-columns: 100%;
    
    & .introduction {
      grid-column: 1 / 2;
    }
    & .room-device {
      grid-column: 1 / 2;
      flex-direction: column;
    }

  }
`;
