import styled from "styled-components";

interface ContainerProps{
    size: string
}

export const Container = styled.button<ContainerProps>`
  width: ${(props) => props.size}px;
  height: 30px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.primary};
  border-radius: 20px;
  border: 1px black;
  margin: 1rem 0;
  overflow: hidden;
  cursor: pointer;
`;
