import styled from 'styled-components';

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  overflow: auto;

  section {
    width: 70rem;
    height: 48rem;
    display: flex;
    justify-content: space-between;

    background: #ccc;
    border-radius: 1rem;
  }

  section main:first-child {
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
  }

  section aside:last-child {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 0 1rem 1rem 0;
  }

  /* @media screen and (max-width: 600px) {
    padding: 0;

    section {
      width: 100%;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 2rem 2rem;
    }

    section main {
      width: 100%;
    }

    section aside {
      width: 100%;
    }

    section main form input {
      width: 100%;
    }

    section main form button {
      width: 100%;
    }
    section main form div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  } */
`;
