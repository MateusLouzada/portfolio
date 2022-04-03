import styled from "styled-components";

export const Container = styled.div`
  max-height: 600px;
  height: 60vh;
  width: 90vw;
  max-width: 300px;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;
