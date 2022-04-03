import styled from "styled-components";

export const Container = styled.div`
    width: 180px;
    height: 30px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: whitesmoke;
    background-color: ${props => props.theme.colors.secundary};
    border-radius: 20px;
    border: 1px black;
    margin: 2rem 0;
`