import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh - 120px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Email = styled.div`
  margin: 0 2rem 0 0;
  border: 2px solid white;

  h3 {
    text-align: center;
    padding: 10px;
  }

  p {
    padding: 10px;
  }
`;

export const Phone = styled.div`
  margin: 0 0 0 2rem;
  border: 2px solid white;

  h3 {
    padding: 10px;
  }

  p {
    text-align: center;
    padding: 10px;
  }
`;
