import styled from 'styled-components';

export const Main = styled.section`
  main {
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
  }

  main form {
    display: flex;
    width: 100%;

    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  main form img {
    width: 10rem;
    height: 10rem;

    margin-bottom: 3rem;
  }

  main form input {
    width: 30rem;
    border-radius: 5px;
    height: 3.2rem;
    margin-bottom: 1rem;
    padding-left: 1rem;
  }

  main form button {
    width: 30rem;
    border-radius: 5px;
    height: 3.2rem;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  main form div {
    width: 30rem;
    display: flex;
    justify-content: space-between;
  }

  main form div span,
  strong {
    font-size: 12;
    font-weight: bold;
  }
`;
