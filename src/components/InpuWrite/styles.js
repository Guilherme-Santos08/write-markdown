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
      line-height: 1.4;

      width: 100%;
      height: 100%;
      padding: 30px;
      font-size: 1.2rem;

      resize: none;
      border: none;
      outline: none;
    }
  }
  .showMarked {
    padding: 30px;
    color: #24292e;
    line-height: 1.4;
    & :nth-child(1) {
      margin-top: 0 !important;
    }

    width: 50vw;
    min-height: 100vh;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #eaecef;
      margin-bottom: 15px;
      margin-top: 20px;

      font-weight: 600 !important;
      line-height: 1.25;

      & code {
        font-weight: 600;
      }
    }
    code {
      font-family: "Roboto", sans-serif;
      font-size: 85%;

      padding: 0.3rem 0.6rem;
      margin: 0;

      background-color: rgba(27, 31, 35, 0.05);
      border-radius: 3px;
    }

    blockquote,
    details,
    dl,
    ol,
    p,
    pre,
    table,
    ul {
      margin-top: 0;
      margin-bottom: 16px;
    }

    ol,
    ul {
      padding-left: 1.8rem;
    }

    li + li {
      margin-top: 3px;
    }

    p {
      font-weight: normal;
    }

    a {
      color: #6272a4;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
