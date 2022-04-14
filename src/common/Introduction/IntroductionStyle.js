import styled from "@emotion/styled";

export const IntroductionStyle = styled.div`
display: flex;
align-items:center;
max-width: fit-content;
padding-right: 1rem;
// border: 1px solid black;
background-color: ${props=>props.theme.colors.whiteGrey};
// margin: 1rem;
& img {
    width: 12rem;
    margin: 0 0.5rem;
    @media screen and (min-width: 320px) and (max-width:600px) {
        width: 10rem; 
    }
}

& div {
    display:flex;
    flex-direction: column;
}
& p {
    // width: 15rem;
    margin: 0.75rem 0.5rem;
}
`;
