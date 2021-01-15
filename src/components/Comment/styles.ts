import styled from 'styled-components';

export const NewComment = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  max-width: 30rem;
  min-height: 30rem;

  display: flex;
  flex-direction: column;
  background: #ccc;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.1);

  animation: fadeIn 02s ease;

  header {
    width: 100%;
    height: 4.8rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #000;
    padding-bottom: 1rem;
  }

  header img {
    width: 4rem;
    height: 4rem;

    border-radius: 50%;
    border: 1px solid #000;
  }

  header strong {
    font-size: 1.8rem;
    font-weight: bold;
    margin-left: 1rem;
  }

  P {
    margin-top: 1rem;
    font-size: 1.4rem;
    margin-left: 1rem;
  }
`;
