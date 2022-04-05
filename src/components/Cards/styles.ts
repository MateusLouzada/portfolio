import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.colors.primary};
    max-width: 500px;
    width: 60vw;
    max-height: 700px;
    height: 60vh;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin: 0 2rem 2rem 0;
    overflow: hidden;
`;

export const Title = styled.h2`
    margin: 10px;
`

export const Image = styled.div`
    height: 40%;
    width: 100%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 20px;
    }
`;

export const Text = styled.div`
    height: 30%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    text-align: center;
`;

export const DivButtons = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`;
