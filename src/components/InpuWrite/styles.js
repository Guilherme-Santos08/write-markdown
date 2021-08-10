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
      background-color: #282a36;
      color: white;

      width: 100%;
      height: 100%;
      padding: 30px;
      font-size: 1.4rem;

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

    pre code {
      display: block;
      background: none;
      white-space: pre;
      -webkit-overflow-scrolling: touch;
      overflow-x: scroll;
      max-width: 100%;
      min-width: 100px;
      padding: 0;
    }
  }
`;
