import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  
  color: black;
  background-color: white;

  width: 100vw;
  min-height: 100vh;

  .writeInput {
    width: 50vw;
    min-height: 100vh;

    textarea {
      width: 100%;
      height: 100%;
      padding: 30px;
      font-size: 1.7rem;

      resize: none;
      border: none;
      outline: none;
    }
  }
  .showMarked {
    font-size: 1.8;
    padding: 30px;

    width: 50vw;
    min-height: 100vh;
  }
`;
