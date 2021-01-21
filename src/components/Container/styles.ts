import styled from 'styled-components';

export const Main = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: var(--color-background);

  section {
    width: 70rem;
    height: 48rem;
    display: flex;
    justify-content: space-between;
    background: var(--color-background);
    border-radius: 1rem;
  }

  section main:first-child {
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    border-radius: 1rem 0 0 1rem;
  }

  section aside:last-child {
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: auto;
    align-items: center;
    border-radius: 0 1rem 1rem 0;

    ::-webkit-scrollbar-track {
      background-color: #74d4d4;
      border-radius: 5px;
    }
    ::-webkit-scrollbar {
      width: 10px;
      background: #24182b;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 5px;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0;
    min-height: 100%;

    section {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 2rem 2rem;
      border-radius: 0;
    }

    section main:first-child {
      width: 100%;
      display: flex;
    }

    section aside:last-child {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 3rem;
      border-radius: 10px;
      background: var(--color-background);
    }
  }
`;
