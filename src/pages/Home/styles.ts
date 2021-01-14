import styled from 'styled-components';

export const Container = styled.div`
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

  section main {
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
  }

  section main form {
    display: flex;
    width: 100%;

    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  section main form img {
    width: 10rem;
    height: 10rem;

    margin-bottom: 3rem;
  }

  section main form input {
    width: 30rem;
    border-radius: 5px;
    height: 3.2rem;
    margin-bottom: 1rem;
    padding-left: 1rem;
  }

  section main form button {
    width: 30rem;
    border-radius: 5px;
    height: 3.2rem;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  section main form div {
    width: 30rem;
    display: flex;
    justify-content: space-between;
  }

  section main form div span,
  strong {
    font-size: 12;
    font-weight: bold;
  }

  section aside {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 0 1rem 1rem 0;
  }

  @media screen and (max-width: 600px) {
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
  }
`;
