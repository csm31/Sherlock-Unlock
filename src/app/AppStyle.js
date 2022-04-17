import styled from "@emotion/styled";

export const HeaderStyle = styled.header`
  text-align: center;
`;

export const MainStyle = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  grid-gap: 2rem;

  .room {
    justify-self: center;
  }
`;
