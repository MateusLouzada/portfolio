import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.div`
    overflow: hidden;
    width: 30%;
    max-width: 300px;

    img{
        width: 100%;
        object-fit: cover;
        border-radius: 200px;
    }
`;

export const TextAbout = styled.div`
    width: 40%;
    max-width: 600px;
    margin: 0 2rem;
    padding: 0.5rem;
    text-align: center;
    font-size: 1.2rem;
`