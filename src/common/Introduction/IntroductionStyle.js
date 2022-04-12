import styled from "@emotion/styled";

export const IntroductionStyle = styled.div`
display: flex;
align-items:center;
width: fit-content;
border: 1px solid black;
background-color: ${props=>props.theme.colors.whiteGrey};
& img {
    width: 10rem;
    margin: 0 0.5rem;
}
& p {
    width: 15rem;
    margin: 0.75rem 0.5rem;
}
`;
