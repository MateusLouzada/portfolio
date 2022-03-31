import styled from "styled-components";

export const Container = styled.div`
  height: 600px;
  width: 300px;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  height: 40px;
  width: 100px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  background-color: transparent;
  border: none;
  color: whitesmoke;
  cursor: pointer;
`;
