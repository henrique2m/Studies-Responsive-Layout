import styled from 'styled-components';

export const ContainerButtons = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 4.8rem;
    font-weight: bold;
    margin-bottom: 3rem;
    text-align: center;
  }

  div {
    display: flex;
  }

  div button {
    width: 10rem;
    height: 10rem;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    font-weight: bold;
    border-radius: 0.5rem;
    color: #fff;
    background: #f45;
    transition: background 2s;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  div & button {
    margin-right: 1rem;
  }

  @keyframes moveY {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(5px);
    }
  }

  div button:hover {
    animation: moveY 0.2s ease alternate;
    background: #f455;
  }

  div {
    margin-left: 1rem;
    font-size: 1.8rem;
  }

  @media screen and (max-width: 600px) {
  }
`;
